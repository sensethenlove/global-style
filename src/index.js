const sass = require('sass')
const fs = require('node:fs')
const result = sass.compile('./src/index.scss')

fs.writeFile('./lib/index.css', result.css, error => {
  if (error) throw error
  console.log('The file has been saved!')
})
