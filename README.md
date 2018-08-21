# Vuepress Tabs

Tabs Container for Vuepress

Expose [vue-tabs-component](https://github.com/spatie/vue-tabs-component) as custom markdown container

## Installation

``` bash
npm install vuepress-tabs
```

or

``` bash
yarn add vuepress-tabs
```

At markdown part of config.js

``` js
markdown: {
  config: md => {
    const vuepressTabs = require('vuepress-tabs')
    vuepressTabs(md)
  }
},
```

## Use

~~~ md
:::: tabs

::: tab title
__Tab Content__
:::


::: tab javascript
``` javascript
() => {
  console.log('Javscript code example')
}
```
:::

::::

~~~
