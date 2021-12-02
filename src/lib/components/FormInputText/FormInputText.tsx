import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { useFormContext } from 'react-hook-form'
import { IReactHookFormInputTextProps } from '@modal/CommonComponent.modal'

const FormInputText: FC<IReactHookFormInputTextProps> = ({
  label,
  name,
  inputType = 'text',
  inputFullWidth = true,
  inputMultiline = false,
  inputRows = 0,
  inputRowsMax = 0,
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
      fullWidth={inputFullWidth}
      rows={inputRows}
      maxRows={inputRowsMax}
      multiline={inputMultiline}
      margin="dense"
      type={inputType}
      {...register(name)}
    />
  )
}

export default FormInputText
