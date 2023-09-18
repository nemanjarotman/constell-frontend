import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

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
    <div className="">
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={`${placeholder}`} {...register(name)} />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  )
}

export default FormInput
