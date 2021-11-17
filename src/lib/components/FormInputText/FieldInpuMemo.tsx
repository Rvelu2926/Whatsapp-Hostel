/* eslint-disable react/display-name */
import React, { memo } from 'react'
import TextField from '@mui/material/TextField'
import { ITextFieldProps } from '@common/component/modal'

const FieldInputMemo = memo(
  ({ methods, label, name }: ITextFieldProps) => (
    <TextField
      label={label}
      variant="outlined"
      error={!!methods.formState?.errors[name]}
      helperText={!!methods.formState.errors[name] ? methods.formState.errors[name]?.message : null}
      fullWidth
      margin="dense"
      {...methods.register(name)}
    />
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.methods.formState.isDirty === nextProps.methods.formState.isDirty &&
      prevProps.methods.formState.errors !== nextProps.methods.formState.errors
    )
  },
)

export default FieldInputMemo
