import React from 'react'
import './App.css'
import FormInput from './shared/ui-components/common-input'

export default function App(): JSX.Element {
  return (
    <div>
      <h3>new react app</h3>
      <FormInput
        name="newInput"
        label="newLabel"
        stylesClass={{ formInput: 'labelI', formLabel: 'labelL' }}
      />
    </div>
  )
}
