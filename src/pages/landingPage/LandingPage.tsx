//section for util imports
import React from 'react'
//section for component imports
import DynamicInputField from '../../components/dynamicInputField/DynamicInputField'

//section for style imports
import './landingpage.scss'

// FC section
const LandingPage = () => {
  //section for states
  const [email, setEmail] = React.useState('')
  const [mob, setMob] = React.useState('')
  const [fName, setFName] = React.useState('')
  const [color, setColor] = React.useState('')
  const [error, setError] = React.useState('')

  //section for logic
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleMobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMob(event.target.value)
  }
  //
  React.useEffect(() => {
    if (fName.length > 7) {
      setError('opps looks like your name is to long')
    }
  }, [fName])

  //
  return (
    <div className='lpcontainer'>
      <h1>StudioGraphene Template</h1>
      <div className='inputgrid'>
        <div className='demobox'>
          <h5>demo of checkbox input + main css</h5>
          <DynamicInputField
            type='checkbox'
            label='red'
            name='chechkBoxcolor'
            value={color}
            onChange={() => setColor('red')}
            requiredField={false}
          />
          <DynamicInputField
            type='checkbox'
            label='green'
            name='chechkBoxcolor'
            value={color}
            onChange={() => setColor('green')}
            requiredField={false}
          />
          <DynamicInputField
            type='checkbox'
            label='blue'
            name='chechkBoxcolor'
            value={color}
            onChange={() => setColor('blue')}
            requiredField={false}
          />
        </div>
        <div className='demobox'>
          <h5>demo of number input + secondary css</h5>
          <DynamicInputField
            id='theOne'
            type='number'
            label='insert telephone plox (max 11 numbers)'
            name='mobNumber'
            placeholder={'5551234'}
            value={mob}
            onChange={handleMobChange}
            maxLength={11}
            requiredField={false}
            className={'secondary'}
          />
        </div>
        <div className='demobox'>
          <h5>demo of email input + main css</h5>
          <DynamicInputField
            type='email'
            label='insert email (up to 55 characters)'
            name='email'
            placeholder={'abbabaa@gui.com'}
            value={email}
            onChange={handleEmailChange}
            maxLength={55}
            requiredField={true}
          />
        </div>
        <div className='demobox'>
          <h5>demo of email input + disabled css</h5>
          <DynamicInputField
            type='email'
            label='insert email (up to 55 characters)'
            name='email'
            placeholder={'abbabaa@gui.com'}
            value={email}
            onChange={handleEmailChange}
            maxLength={55}
            requiredField={true}
            className={'disabled'}
          />
        </div>
        <div className='demobox'>
          <h5>demo of number input + main css</h5>
          <DynamicInputField
            type='number'
            label='insert telephone plox (max 11 numbers)'
            name='mobNumber'
            placeholder={'5551234'}
            value={mob}
            onChange={handleMobChange}
            maxLength={11}
            requiredField={false}
          />
        </div>
        <div className='demobox'>
          <h5>demo of input + main css</h5>
          <DynamicInputField
            type='text'
            label='insert 1st name'
            name='fName'
            placeholder={'zack'}
            value={fName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFName(event.target.value)
            }}
            maxLength={11}
            requiredField={false}
            error={error}
          />
        </div>
        <div className='demobox'>
          <h5>demo of radio input + main css</h5>
          <DynamicInputField
            type='radio'
            label='red'
            name='radioColor'
            value={color}
            onChange={() => setColor('red')}
            requiredField={false}
          />
          <DynamicInputField
            type='radio'
            label='green'
            name='radioColor'
            value={color}
            onChange={() => setColor('green')}
            requiredField={false}
          />
          <DynamicInputField
            type='radio'
            label='blue'
            name='radioColor'
            value={color}
            onChange={() => setColor('blue')}
            requiredField={false}
          />
        </div>
      </div>
    </div>
  )
}
export default LandingPage
