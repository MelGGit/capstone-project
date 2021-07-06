import * as React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { mount } from '@cypress/react'

export const createMount = element =>
  mount(<MemoryRouter> {element} </MemoryRouter>)
