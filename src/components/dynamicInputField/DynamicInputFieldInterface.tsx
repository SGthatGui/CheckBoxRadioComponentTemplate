//section for util imports
import React from 'react'
//section for component imports

//section for style imports

//section for TS interface
export default interface Props {
  type?: string
  placeholder?: string
  value?: string /* | React.SetStateAction<string> */
  label?: string
  name?: string
  id?: string
  minLength?: number
  maxLength?: number
  requiredField: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: string
}
