// 'use client'
import { LoginUserInput, LoginUserSchema } from '@/app/login/form.schema'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { apiLoginUser } from '@/lib/api-requests'
import FormInput from '@/components/FormInput/FormInput'
import useStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { Button } from '@chakra-ui/react'

export default function LoginForm() {
  const store = useStore()
  const router = useRouter()

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(LoginUserSchema),
  })

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  useEffect(() => {
    store.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function LoginUserFunction(credentials: LoginUserInput) {
    store.setRequestLoading(true)
    try {
      await apiLoginUser(JSON.stringify(credentials))
      return router.push('/home')
    } catch (error: any) {
      console.log(error)
      if (error instanceof Error) {
      } else {
        console.log('Error message:', error.message)
      }
    } finally {
      store.setRequestLoading(false)
    }
  }

  const onSubmitHandler: SubmitHandler<LoginUserInput> = (values) => {
    LoginUserFunction(values)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput
          label="Email"
          name="email"
          placeholder={'Enter email here'}
          type="email"
        />
        <FormInput
          placeholder={'Enter password here'}
          label="Password"
          name="password"
          type="password"
        />
        <Button>Login</Button>
      </form>
    </FormProvider>
  )
}
