import DynamicInputField from './DynamicInputField'
import LandingPage from '../../pages/landingPage/LandingPage'
import React from 'react'

describe('input', () => {
  it('does the input received attributes via props', () => {
    cy.mount(
      <DynamicInputField
        type='email'
        label='insert email (up to 55 characters)'
        name='email'
        placeholder={'abbabaa@gui.com'}
        value={''}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          event.target.value
        }
        maxLength={55}
        requiredField={true}
      />
    )
    cy.get('input').should('have.attr', 'placeholder', 'abbabaa@gui.com')
    cy.get('input').should('have.attr', 'type', 'email')
  })

  it('does the input received value through states in landing page', () => {
    cy.mount(<LandingPage />)
    cy.get('#theOne').should('have.attr', 'type', 'number').type('567')
  })
})
