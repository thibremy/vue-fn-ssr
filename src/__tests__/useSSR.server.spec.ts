/**
 * @jest-environment node
 */
import useSSR from '../useSSR'
import { renderToStringSetup } from './utils'

test('useSSR in node env', async () => {
  const str = await renderToStringSetup(() => ({ ssr: useSSR() }))
  expect(str).toContain(
    '{&quot;isBrowser&quot;:false,&quot;isServer&quot;:true,&quot;canUseWorkers&quot;:false,&quot;canUseEventListeners&quot;:false,&quot;canUseViewport&quot;:false}'
  )
})
