<div align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/php-1.svg" width="226" height="118">
  <img src="https://webpack.js.org/assets/icon-square-big.svg" width="140" height="140">
  <h1 align="center">PHP array Loader</h1>
</div>

## Installation

```shell
npm install php-array-loader
```

## Usage

**`webpack.config.js`**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.php$/,
        use: 'php-array-loader'
      }
    ]
  }
}
```

```js
import config from 'config.php'
```
