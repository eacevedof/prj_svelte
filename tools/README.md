- npm config set registry https://registry.npmjs.org/
```js
npm run

Lifecycle scripts included in svelte-app:
  start
    sirv public --single

available via `npm run-script`:
  build
    rollup -c
  autobuild
    rollup -c -w
  dev
    run-p start:dev autobuild
  start:dev
    sirv public --single --dev
```