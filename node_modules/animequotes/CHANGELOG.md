# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.2] - 2020-04-07
### Security
- [Bumped standard from 14.3.1 to 14.3.3 to fix prototype pollution in minimist](https://github.com/advisories/GHSA-vh95-rmgr-6w4m).

## [1.1.1] - 2020-03-14
### Security
- [Bumped acorn from 7.1.0 to 7.1.1](https://github.com/advisories/GHSA-7fhm-mqm4-2wp7).

## [1.1.0] - 2019-10-24
### Added
- Code linting with [standard](https://standardjs.com/index.html).
- Standard added to `npm test`.

### Changed
- Private functions are prepended with `_`.
- `_searchData (inputKey, inputVal)` now does case insensitive search.
- Performance improvement for `getQuote (id)`.

## [1.0.0] - 2018-02-25
### Added
- Initial release with 8510 quotes.

[unreleased]: https://github.com/FR0ST1N/animequotes/compare/master...develop
[1.1.2]: https://github.com/FR0ST1N/animequotes/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/FR0ST1N/animequotes/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/FR0ST1N/animequotes/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/FR0ST1N/animequotes/releases/tag/v1.0.0
