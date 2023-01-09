//section for util imports
import React from 'react'
import Props from './DynamicInputFieldInterface'
//section for component imports

//section for style imports
import './DynamicInputField.scss'

// FC section
const DynamicInputField: React.FunctionComponent<Props> = ({
  type = 'text',
  placeholder,
  value,
  label,
  name,
  id,
  minLength,
  maxLength,
  requiredField = false,
  onChange,
  error,
  className = 'main',
}) => {
  //section for states

  //section for logic
  if (error) {
    ;<input autoFocus />
  }

  //
  return (
    <div className={className}>
      {/* this label is to be used for text or number based inputs */}
      {type != 'checkbox' && type != 'radio' ? (
        <label htmlFor={name}>{label}</label>
      ) : (
        ''
      )}

      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          className={error ? className + ' error' : className}
          required={requiredField}
        />

        {/* this is for the radio + checkbox label as they have to come after the
      input */}
        {type === 'checkbox' || type === 'radio' ? (
          <label htmlFor={name} className='nonStringLabel'>
            {label}
          </label>
        ) : (
          ''
        )}
      </div>
      {/* bellow is the error msg div */}
      {error ? (
        <div className='errorMsg'>
          <span>{error}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default DynamicInputField
