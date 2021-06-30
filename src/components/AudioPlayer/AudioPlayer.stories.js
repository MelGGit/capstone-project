import AudioPlayer from './AudioPlayer'
export default {
  title: 'AudioPlayer',
  component: AudioPlayer,
}

const Template = args => <AudioPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  audioObject: {
    image:
      'https://www.theincomparable.com/imgs/logos/logo-batmanuniversity-3x.jpg?cache-buster=2019-06-11',
    title: '"Gotham"',
    author: 'Batman University',
    audioSrc: 'https://www.theincomparable.com/podcast/batmanuniversity302.mp3',
  },
}
