import EpisodeCardsList from './EpisodeCardsList'
export default {
  title: 'EpisodeCardsList',
  component: EpisodeCardsList,
}

const Template = args => <EpisodeCardsList {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 75075,
}
