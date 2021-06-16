/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import React from 'react'
import { mount } from '@cypress/react'
import FavorizeButton from '../components/FavorizeButton/FavorizeButton'
import { RecoilRoot } from 'recoil'

it('renders a text', () => {
  mount(
    <RecoilRoot>
      <FavorizeButton id={666} />
    </RecoilRoot>
  )

  cy.get('button').should('have.prop', 'click')
  cy.get('button').should('be.visible')
  cy.get('button').contains('Add to Favorites')
  cy.get('button').should('contain.html', 'svg')
})
