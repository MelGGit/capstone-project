import AudioControls from './AudioControls'
export default {
  title: 'AudioControls',
  component: AudioControls,
}

const Template = args => <AudioControls {...args} />

export const Default = Template.bind({})
Default.args = {
  isPlaying: false,
}
