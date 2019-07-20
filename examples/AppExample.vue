<template>
  <div>
    <ul>
      <li>Browser {{ isBrowser ? '👍' : '👎' }}</li>
      <li>Server {{ isServer ? '👍' : '👎' }}</li>
    </ul>
    <code>
      {{ ssr }}
    </code>
  </div>
</template>

<script>
import useSSR from '@/useSSR'

export default {
  name: 'AppExample',
  setup() {
    const ssr = useSSR()

    /* eslint-disable */
    console.log('IS BROWSER: ', ssr.isBrowser ? '👍' : '👎')
    console.log('IS SERVER: ', ssr.isServer ? '👍' : '👎')
    /* eslint-enable */

    return {
      isBrowser: ssr.isBrowser,
      isServer: ssr.isServer,
      ssr,
    }
  },
}
</script>
