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
 - `GITHUB_API_TOKEN`
 - `TRAVIS_PULL_REQUEST_SHA`
 - `TRAVIS_REPO_SLUG`
 - `ZEIT_API_TOKEN`

```
$ wait-for-now
```

## Change Log

> [Full Change Log](changelog.md)

### [v1.1.1](https://github.com/wyze/wait-for-now/releases/tag/v1.1.1) (2018-10-20)

* [[`7bc9b2261c`](https://github.com/wyze/wait-for-now/commit/7bc9b2261c)] - Set an interval between API calls for status checks (Neil Kistner)
* [[`a5d05f0eb4`](https://github.com/wyze/wait-for-now/commit/a5d05f0eb4)] - Switch from TRAVIS\_COMMIT to TRAVIS\_PULL\_REQUEST\_SHA (Neil Kistner)

## License

MIT © [Neil Kistner](//neilkistner.com)

[travis-image]: https://img.shields.io/travis/wyze/wait-for-now.svg?style=flat-square
[travis-url]: https://travis-ci.org/wyze/wait-for-now

[npm-image]: https://img.shields.io/npm/v/wait-for-now.svg?style=flat-square
[npm-url]: https://npmjs.com/package/wait-for-now

[codecov-image]: https://img.shields.io/codecov/c/github/wyze/wait-for-now.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wyze/wait-for-now
