import { UseFormReturn } from 'react-hook-form'

export interface ITextFieldContainerProps {
  name: string
  label: string
}

export interface ITextFieldProps {
  methods: UseFormReturn
  label: string
  name: string
}
