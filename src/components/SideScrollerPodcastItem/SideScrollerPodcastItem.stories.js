import SideScrollerPodcastItem from './SideScrollerPodcastItem'
export default {
  title: 'SideScrollerPodcastItem',
  component: SideScrollerPodcastItem,
}

const Template = args => <SideScrollerPodcastItem {...args} />

export const Default = Template.bind({})
Default.args = {
  podcast: {
    id: 432618,
    title: 'Murder On The Space Coast',
    url:
      'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/podcast.rss',
    originalUrl:
      'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/podcast.rss',
    link: 'http://murderonthespacecoast.com/',
    description:
      "An unsympathetic victim, a prosecutor's conviction playbook, a missing mother of two and a tale of lie after lie after lie. Across four seasons, Murder on the Space Coast has explored each of these heartbreaking true-crime stories based in Central Florida.",
    author: 'Gannett',
    ownerName: 'Murder On The Space Coast',
    image:
      'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/image.jpg?t=1578085538&size=Large',
    artwork:
      'https://www.omnycontent.com/d/playlist/a858b0a5-e5e6-4a14-9717-a70b010facc1/6c32fe2a-7527-4559-b897-ab370147e602/61cbce74-5204-4af7-bf01-ab370147e615/image.jpg?t=1578085538&amp;size=Large',
    lastUpdateTime: 1622439701,
    lastCrawlTime: 1623047036,
    lastParseTime: 1623022992,
    lastGoodHttpStatusTime: 1623047036,
    lastHttpStatus: 200,
    contentType: 'application/xml; charset=utf-8',
    itunesId: 1135546231,
    generator: null,
    language: 'en-US',
    type: 0,
    dead: 0,
    crawlErrors: 0,
    parseErrors: 0,
    categories: { 55: 'News' },
    locked: 0,
    imageUrlHash: 1247662251,
  },
}
