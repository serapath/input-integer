const csjs = require('csjs-inject')
const bel = require('bel')

const inputInteger = require('..')

function demo () {
  const page = bel`<div class=${css.demo}>
    <h1>input-integer demo</h1>
    <div class=${css.container}>
      ${inputInteger()}
      ${inputInteger()}
      ${inputInteger()}
    </div>
  </div>`
  return page
}
const css = csjs`
.demo {
  margin: 20px;
  padding: 20px;
  border: 2px dashed green;
}
.container {
  display: flex;
  flex-direction: column;
  width:50%;
}`


document.body.appendChild(demo())
