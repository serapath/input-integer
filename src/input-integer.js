const csjs = require('csjs-inject')
const parser = document.createElement('div')

module.exports = inputInteger

function inputInteger () {
  parser.innerHTML = `<input type="number" placeholder="number">`
  const element = parser.children[0]
  return element
}