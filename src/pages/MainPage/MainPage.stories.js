import MainPage from './MainPage'
export default {
  title: 'PAGES/MainPage',
  component: MainPage,
}

const Template = args => <MainPage {...args} />

export const Default = Template.bind({})
Default.args = {}
