import { render, screen } from '@testing-library/react'
import PodcastListPage from './PodcastListPage'

describe('PodcastListPage', () => {
  it('renders two Podcast Cards', () => {
    render(
      <PodcastListPage
        podcasts={[
          {
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
          {
            id: 245656,
            title: 'Zimmerman in Space',
            url: 'https://podcast.npo.nl/feed/zimmerman-in-space.xml',
            originalUrl: 'https://podcast.npo.nl/feed/zimmerman-in-space.xml',
            link: 'https://www.nporadio1.nl/podcasts/zimmerman-in-space',
            description:
              'Spacegeek Hens Zimmerman maakt elke week een podcast over sterrenkunde en de ruimtevaart. Maar, op de een of andere manier, steekt er bijna altijd een filosofische of politieke boodschap de kop op. Om de luisteraar vervolgens aan het eind met meer vragen dan antwoorden op te zadelen.',
            author: 'NPO Radio 1 / NTR',
            ownerName: 'NPO Radio 1 / NTR',
            image:
              'https://podcast.npo.nl/data/thumb/zimmerman-in-space.1400.057c0afe044d4192abe401a27f84d12e.jpg',
            artwork:
              'https://podcast.npo.nl/data/thumb/zimmerman-in-space.1400.057c0afe044d4192abe401a27f84d12e.jpg',
            lastUpdateTime: 1622711420,
            lastCrawlTime: 1623051153,
            lastParseTime: 1623003081,
            lastGoodHttpStatusTime: 1623051153,
            lastHttpStatus: 200,
            contentType: 'application/xml',
            itunesId: 1460851889,
            generator: null,
            language: 'nl-nl',
            type: 0,
            dead: 0,
            crawlErrors: 1,
            parseErrors: 0,
            categories: {
              67: 'Science',
              20: 'Education',
              102: 'Technology',
              68: 'Astronomy',
              77: 'Society',
              78: 'Culture',
              82: 'Philosophy',
            },
            locked: 0,
            imageUrlHash: 3870245733,
          },
        ]}
      />
    )
    expect(screen.getByText('Murder On The Space Coast')).toBeInTheDocument()
    expect(screen.getByText('Zimmerman in Space')).toBeInTheDocument()

    const imageListLength = screen.getAllByRole('img').length

    expect(imageListLength).toBe(2)
  })
})
