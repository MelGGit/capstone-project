import EpisodeCard from './EpisodeCard'
export default {
  title: 'EpisodeCard',
  component: EpisodeCard,
}

const Template = args => <EpisodeCard {...args} />

export const Default = Template.bind({})
Default.args = {
  episode: {
    id: 16795088,
    title: '"Gotham"',
    link: 'https://www.theincomparable.com/batmanuniversity/19/',
    description:
      'Batman University is back in session! James Thomson and Nathan Alderman join Tony for a discussion of Fox\u2019s \u201cGotham.\u201d Tune in to hear our thoughts on how a half-baked comic book show was reborn into an unmissable train wreck. <p>Tony Sindelar   with James Thomson and Nathan Alderman.</p>',
    guid: 'incomparable/batman/19b',
    datePublished: 1546399813,
    datePublishedPretty: 'January 01, 2019 9:30pm',
    dateCrawled: 1598369047,
    enclosureUrl:
      'https://www.theincomparable.com/podcast/batmanuniversity302.mp3',
    enclosureType: 'audio/mp3',
    enclosureLength: 26385472,
    duration: 3297,
    explicit: 0,
    episode: 19,
    episodeType: 'full',
    season: 3,
    image: '',
    feedItunesId: 1441923632,
    feedImage:
      'https://www.theincomparable.com/imgs/logos/logo-batmanuniversity-3x.jpg?cache-buster=2019-06-11',
    feedId: 75075,
    feedLanguage: 'en-us',
    chaptersUrl: null,
    transcriptUrl: null,
  },
}
