import FavorizeButton from '../components/FavorizeButton/FavorizeButton'
import { RecoilRoot } from 'recoil'
import { mount } from '@cypress/react'
import { searchedPodcastsByTermState } from '../states'

it('renders a text', () => {
  const initializeState = ({ set }) => {
    set(searchedPodcastsByTermState, [{ id: 1 }, { id: 2 }])
  }
  mount(
    <RecoilRoot initializeState={initializeState}>
      <FavorizeButton id={1} />
    </RecoilRoot>
  )

  cy.get('button').should('have.prop', 'click')
  cy.get('button').should('be.visible')
  cy.get('button').contains('Add to Favorites')
  cy.get('button').should('contain.html', 'svg')
})
