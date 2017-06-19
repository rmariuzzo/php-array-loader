const parser = require('php-array-parser')

module.exports = (source) => {
  // Remove left part of return expression and any ending `?>`.
  const ret = source.indexOf('return') + 'return'.length
  source = source.substr(ret)
  source = source.replace(/\?>\s*$/, '_')

  const value = JSON.stringify(parser.parse(source))
  return this.version && this.version >= 2 ? `export default ${value};` : `module.exports = ${value};`
}
