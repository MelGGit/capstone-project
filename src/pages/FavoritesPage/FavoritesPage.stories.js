import FavoritesPage from './FavoritesPage'
export default {
  title: 'PAGES/FavoritesPage',
  component: FavoritesPage,
}

const Template = args => <FavoritesPage {...args} />

export const Default = Template.bind({})
Default.args = {}
