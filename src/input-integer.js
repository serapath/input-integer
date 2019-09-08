const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = inputInteger

function inputInteger (data, notify) {
  const { value = 0, placeholder = 'number' } = data
  const input = bel`<input class=${css.inputInteger} type="number" placeholder=${placeholder} value=${value}>`
  input.onchange = event => {
    notify({ type: 'update', body: input.value })
  }
  return input
}

const css = csjs`
.inputInteger {
  background-color: lightgreen;
}`
