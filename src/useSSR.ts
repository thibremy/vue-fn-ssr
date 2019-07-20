import { state, watch, onMounted } from 'vue-function-api'

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

interface SSRResult {
  isBrowser: boolean
  isServer: boolean
  canUseWorkers: boolean
  canUseEventListeners: boolean
  canUseViewport: boolean
}

export default function useSSR(): SSRResult {
  let ssr = state({
    isBrowser: canUseDOM,
    isServer: !canUseDOM,
    canUseWorkers: false,
    canUseEventListeners: false,
    canUseViewport: false,
  })

  onMounted(() => {
    ssr.isBrowser = canUseDOM
  })

  watch(
    () => ssr.isBrowser,
    (inBrowser: boolean) => {
      ssr = {
        ...ssr,
        isBrowser: inBrowser,
        isServer: !inBrowser,
        canUseWorkers: typeof Worker !== 'undefined',
        canUseEventListeners: inBrowser && !!window.addEventListener,
        canUseViewport: inBrowser && !!window.screen,
      }
    }
  )

  return ssr
}
