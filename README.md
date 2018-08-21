# Vuepress Tabs

Tabs Container for Vuepress

Expose [vue-tabs-component](https://github.com/spatie/vue-tabs-component) as custom markdown container

## Prerequisite

[vue-tabs-component](https://github.com/spatie/vue-tabs-component) assumed to be installed and registered as global component

Register in enhanceApp.js
``` js
import Tabs from 'vue-tabs-component'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    //...
    Vue.use(Tabs)
    //...
  })
```

## Installation

``` bash
yarn add vuepress-tabs
```

or

``` bash
npm install vuepress-tabs
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

import theme in style.styl

``` stylus
@require '~vuepress-tabs/dist/themes/default.styl'
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
