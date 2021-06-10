import FavoritesPage from './FavoritesPage'
export default {
  title: 'PAGES/FavoritesPage',
  component: FavoritesPage,
}

const Template = args => <FavoritesPage {...args} />

export const Default = Template.bind({})
Default.args = {
  favoritePodcasts: {
    id: 1,
    image:
      'https://www.omnycontent.com/d/playlist/289ceca7-bef3-48af-9f74-a4ba0095cab1/e50c88c5-ba65-4dda-97b5-abc900f1c59d/f475d4e2-13e4-4395-b2df-ad1201014f01/image.jpg?t=1619105859&size=Large',
    title: 'The Space Programme',
    description:
      'A small Scottish island is shocked to find itself home to a brand new space program. When two tech entrepreneurs announce their plan to make one of the local kids the world\u2019s first child astronaut, nothing is ever the same again. Listen to all 20 episodes now.\r\n\r\nA Bafflegab Production for Fun Kids, supported by the Audio Content Fund.',
    author: 'Fun Kids',
  },
}
