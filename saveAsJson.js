const fs = require('fs')

const file = fs.readFileSync('./categories.json', 'utf8')
const json = JSON.parse(file)
json.feeds.forEach(el => (el.color = randomColor()))

json.feeds.sort((a, b) => a.name.localeCompare(b.name))

const stringJson = JSON.stringify(json)

fs.writeFileSync('./src/categories.json', stringJson, 'utf8')

function randomColor() {
  return `hsla(${180 + 180 * Math.random()}, ${10 + 50 * Math.random()}%, ${
    45 + 10 * Math.random()
  }%, ${40 + 40 * Math.random()}%)`
}
