# wait-for-now

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![Codecov.io][codecov-image]][codecov-url]

> Uses GitHub status to wait for a Now deployment to complete.

## Installation

### Yarn

```
$ yarn add wait-for-now
```

### npm

```
$ npm install --save wait-for-now
```

## Usage

Requires the following environment variables:
 - `TRAVIS_REPO_SLUG`
 - `TRAVIS_COMMIT`
 - `ZEIT_API_TOKEN`

```
$ wait-for-now
```

## Change Log

> [Full Change Log](changelog.md)

## License

MIT © [Neil Kistner](//neilkistner.com)

[travis-image]: https://img.shields.io/travis/wyze/wait-for-now.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/wait-for-now

[npm-image]: https://img.shields.io/npm/v/wait-for-now.svg?style=flat-square
[npm-url]: https://npmjs.com/package/wait-for-now

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/wait-for-now.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/wait-for-now
