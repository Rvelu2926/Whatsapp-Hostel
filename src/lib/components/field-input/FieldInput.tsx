import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { ITextFieldContainerProps } from '@modal'
import FieldInputMemo from './FieldInpuMemo'

const CommonFieldInput: FC<ITextFieldContainerProps> = ({
  name,
  label,
}: ITextFieldContainerProps) => {
  const methods = useFormContext()

  return <FieldInputMemo methods={methods} label={label} name={name} />
}

export default CommonFieldInput
