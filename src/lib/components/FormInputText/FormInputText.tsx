import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { useFormContext } from 'react-hook-form'
import { IReactHookFormInputTextProps } from '@common/component/modal'

const FormInputText: FC<IReactHookFormInputTextProps> = ({
  label,
  name,
  inputType = 'text',
}: IReactHookFormInputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <TextField
      label={label}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
      fullWidth
      margin="dense"
      type={inputType}
      {...register(name)}
    />
  )
}

export default FormInputText
