# Vuepress Tabs

Tabs Container for Vuepress

Expose [vue-tabs-component](https://github.com/spatie/vue-tabs-component) as custom markdown container

## Prerequisite

[vue-tabs-component](https://github.com/spatie/vue-tabs-component) assumed to be installed and registered as global component

Register in enhanceApp.js
``` js
import Tabs from 'vue-tabs-component'

export default (({
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



## Usage

~~~ md
:::: tabs

::: tab title
__markdown content__
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

### Tabs attributes

Everything after tabs will be passed to tabs component as attributes.

~~~ md
:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab "Tab Title" id="first-tab"
__markdown content__
:::


::: tab javascript id="second-tab"
``` javascript
() => {
  console.log('Javscript code example')
}
```
:::

::::

~~~


### Tab attributes

Everything after tab will be passed to tab component as attributes.
Any value that does not have a name will be passed as the name attribute. Multiword names must be enclosed in quotes.
Only one such value is valid.

~~~ md
:::: tabs

::: tab "Tab Title" id="first-tab"
__markdown content__
:::


::: tab javascript id="second-tab"
``` javascript
() => {
  console.log('Javscript code example')
}
```
:::

::::

~~~
