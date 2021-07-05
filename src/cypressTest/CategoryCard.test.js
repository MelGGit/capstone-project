/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import CategoryCard from '../components/CategoryCard/CategoryCard'
import { MemoryRouter } from 'react-router-dom'
import { mount } from '@cypress/react'

describe('Test for CategoryCard Component', () => {
  it('should render books', () => {
    const category = {
      id: 2,
      name: 'Books',
    }

    mount(
      <MemoryRouter>
        <CategoryCard category={category} />
      </MemoryRouter>
    )

    cy.contains(category.name).should('exist')
  })
})
