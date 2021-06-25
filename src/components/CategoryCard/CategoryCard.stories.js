import CategoryCard from './CategoryCard'
export default {
  title: 'CategoryCard',
  component: CategoryCard,
}

const Template = args => <CategoryCard {...args} />

export const Default = Template.bind({})
Default.args = {
  category: {
    id: 2,
    name: 'Books',
  },
}
