Changelog
=========

## v2.1.1
- start in create readableStream was not defined.

## v2.1.0
- Fix: .slice has an implementation bug (#54).
- Added blob backed up by filesystem (#55).

## v2.0.1

- Fix: remove upper bound for node engine semver (#49).

## v2.0.0

> Note: This release was previously published as `1.0.7`, but as it contains breaking changes, we renamed it to `2.0.0`.

- **Breaking:** minimum supported Node.js version is now 10.17.
- **Breaking:** `buffer` option has been removed.
- Enhance: create TypeScript declarations from JSDoc (#45).
- Enhance: operate on blob parts (byte sequence) (#44).
- Enhance: use a `WeakMap` for private properties (#42) .
- Other: update formatting.

## v1.0.6

- Enhance: use upstream Blob directly in typings (#38)
- Other: update dependencies

## v1.0.5

- Other: no change to code, update dev dependency to address vulnerability reports

## v1.0.4

- Other: general code rewrite to pass linting, prepare for `node-fetch` release v3

## v1.0.3

- Fix: package.json export `blob.js` properly now

## v1.0.2

- Other: fix test integration

## v1.0.1

- Other: readme update

## v1.0.0

- Major: initial release
