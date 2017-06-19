const parser = require('php-array-parser')

module.exports = (source) => {
  const value = parser.parse(source)
  return this.version && this.version >= 2 ? `export default ${value};` : `module.exports = ${value};`
}
