
import Headline from './Headline'
export default {
    title: 'Headline',
    component: Headline
}
  
const Template = args => <Headline {...args} />
  
export const Default = Template.bind({})
Default.args = {}
      