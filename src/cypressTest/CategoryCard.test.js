/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import CategoryCard from '../components/CategoryCard/CategoryCard'
import { createMount } from './test-utils'

describe('Test for CategoryCard Component', () => {
  it('should render books', () => {
    const mount = createMount
    const category = {
      id: 2,
      name: 'Books',
    }

    mount(<CategoryCard category={category} />)

    cy.findByText(category.name).should('exist')
  })
})
