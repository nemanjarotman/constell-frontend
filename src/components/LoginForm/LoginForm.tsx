'use client'
import { FC, useEffect } from 'react'
import { LoginUserInput, LoginUserSchema } from '@/app/login/form.schema'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '@/components/FormInput/FormInput'
import useAuthStore from '@/store/authStore'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button, VStack } from '@chakra-ui/react'

const LoginForm: FC = () => {
  const store = useAuthStore()
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
  }, [isSubmitSuccessful])

  useEffect(() => {
    store.reset()
  }, [])

  async function LoginUserFunction(credentials: LoginUserInput) {
    store.setRequestLoading(true)
    try {
      const response = await axios.post('/api/login', credentials)
      localStorage.setItem('token', response?.data?.token)
      router.push('/home')
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
        <VStack alignItems={'center'}>
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
          <Button variant={'disabled'} w={'181px'} type="submit">
            Login
          </Button>
        </VStack>
      </form>
    </FormProvider>
  )
}

export default LoginForm
