import PodcastListPage from './PodcastListPage'
export default {
  title: 'Pages/PodcastListPage',
  component: PodcastListPage,
}

const Template = args => <PodcastListPage {...args} />

export const TwoPodcasts = Template.bind({})
TwoPodcasts.args = {
  podcasts: [
    {
      id: 432618,
      title: 'Murder On The Space Coast',

      image:
        'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/image.jpg?t=1578085538&size=Large',
    },
    {
      id: 245656,
      title: 'Zimmerman in Space',

      image:
        'https://podcast.npo.nl/data/thumb/zimmerman-in-space.1400.057c0afe044d4192abe401a27f84d12e.jpg',
    },
  ],
}
