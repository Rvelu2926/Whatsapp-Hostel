import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  ref: string
  stylesClass: {
    formLabel: string
    formInput: string
  }
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, stylesClass, ...otherProps },
  ref,
) => {
  return (
    <>
      <label className={stylesClass.formLabel}>{label}</label>
      <input className={stylesClass.formInput} {...otherProps} name={name} ref={ref} />
    </>
  )
}

const FormInput = React.forwardRef(Input)

export default FormInput
