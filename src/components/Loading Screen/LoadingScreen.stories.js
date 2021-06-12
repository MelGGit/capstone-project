
import LoadingScreen from './LoadingScreen'
export default {
    title: 'LoadingScreen',
    component: LoadingScreen
}
  
const Template = args => <LoadingScreen {...args} />
  
export const Default = Template.bind({})
Default.args = {}
      