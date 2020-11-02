# A repository to reproduce [webpack umd bug](https://github.com/webpack/webpack/issues/11906)

webpack execute and replace code like `typeof define === "function"`and `typeof module === "object"` during compile.

## Usage

```bash
$ yarn
$ npm run build
$ node dist/index.js
```

will get error: `TypeError: Cannot read property 'VERSION' of undefined`