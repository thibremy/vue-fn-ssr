# vue-fn-ssr

Vue function to discover if you are in a server or browser

## Install

``` bash  
npm i vue-fn-ssr --save  
```  

## Usage

``` js
<template>
  <div>
    <ul>
      <li>Browser {{isBrowser ? '👍' : '👎' }}<li>
      <li>Server  {{isServer ? '👍' : '👎' }}</li>
    </ul>
    <code>
      {{ssr}}
    </code>
  </div>
</template>

<script>
import useSSR from 'vue-fn-ssr'

export default {
  setup(props) {
    const ssr = useSSR()
    
    console.log('IS BROWSER: ', isBrowser ? '👍' : '👎')
    console.log('IS SERVER: ', isServer ? '👍' : '👎')
    
    return {
      isBrowser: ssr.isBrowser,
      isServer: ssr.isServer
      ssr
    }
  }
}
</script>
```

## Features

- Server Side Rendering check
- TypeScript support
- Zero dependencies

## Options

``` js
const {
  isBrowser,
  isServer,
  canUseWorkers,
  canUseEventListeners,
  canUseViewport,
} = useSSR()
```

## Thanks

:pray: Heavily inspired by [use-ssr](https://github.com/alex-cory/use-ssr)
