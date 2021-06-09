import FavorizeButton from './FavorizeButton'
export default {
  title: 'FavorizeButton',
  component: FavorizeButton,
}

const Template = args => <FavorizeButton {...args} />

export const Default = Template.bind({})
Default.args = {
  isFavorite: false,
  id: 1,
}
