
import DetailedPodcast from './DetailedPodcast'
export default {
    title: 'DetailedPodcast',
    component: DetailedPodcast
}
  
const Template = args => <DetailedPodcast {...args} />
  
export const Default = Template.bind({})
Default.args = {}
      