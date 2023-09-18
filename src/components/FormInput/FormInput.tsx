'use client'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormLabel, Input, VStack } from '@chakra-ui/react'

type FormInputProps = {
  label: string
  name: string
  placeholder: string
  type?: string
}

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <VStack alignItems={'left'} spacing={2} w={'386px'}>
      <FormLabel m={0} htmlFor={name}>
        {label}
      </FormLabel>
      <Input type={type} placeholder={`${placeholder}`} {...register(name)} />
      {errors[name] && <span>{errors[name]?.message as string}</span>}
    </VStack>
  )
}

export default FormInput
