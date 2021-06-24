import CategoriesList from './CategoriesList'
export default {
  title: 'CategoriesList',
  component: CategoriesList,
}

const Template = args => <CategoriesList {...args} />

export const Default = Template.bind({})
Default.args = {}
