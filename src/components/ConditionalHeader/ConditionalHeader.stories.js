import ConditionalHeader from './ConditionalHeader'
export default {
  title: 'ConditionalHeader',
  component: ConditionalHeader,
}

const Template = args => <ConditionalHeader {...args} />

export const Default = Template.bind({})
Default.args = {}
