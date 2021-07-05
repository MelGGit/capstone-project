/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import { mount } from '@cypress/react'

describe('Test for AudioPlayer Component', () => {
  it('should render the props', () => {
    const object = {
      image:
        'https://www.theincomparable.com/imgs/logos/logo-batmanuniversity-3x.jpg?cache-buster=2019-06-11',
      title: '"Gotham"',
      author: 'Batman University',
      audioSrc:
        'https://www.theincomparable.com/podcast/batmanuniversity302.mp3',
    }

    mount(<AudioPlayer audioObject={object} />)
    cy.get('button').click()
    cy.contains(object.title).should('be.visible')
    cy.contains(object.author).should('be.visible')
    cy.get('img').should('have.attr', 'src', object.image)
  })
})
