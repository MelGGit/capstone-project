/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import AudioControls from '../components/AudioControls/AudioControls'
import { mount } from '@cypress/react'

describe('Test for AudioControls Component', () => {
  it('should render a button and on click return true', () => {
    const test = cy.stub()
    mount(<AudioControls isPlaying={false} onPlayPauseClick={test} />)
    cy.get('button').should('exist')
    cy.get('button').should('have.prop', 'click')
    cy.get('button')
      .click()
      .then(() => {
        expect(test).to.have.been.calledOnceWithExactly(true)
      })
  })
  it('should render a button and on click return false', () => {
    const test = cy.stub()
    mount(<AudioControls isPlaying={true} onPlayPauseClick={test} />)
    cy.get('button').should('exist')
    cy.get('button').should('have.prop', 'click')
    cy.get('button')
      .click()
      .then(() => {
        expect(test).to.have.been.calledOnceWithExactly(false)
      })
  })
})
