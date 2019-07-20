/**
 * @jest-environment jsdom
 */
import useSSR from '../useSSR'
import { shallowMountSetup } from './utils'

test('useSSR', () => {
  const wrapper = shallowMountSetup(() => ({ ssr: useSSR() }))
  expect((wrapper.vm as any).ssr).toBeDefined()
  expect((wrapper.vm as any).ssr).toEqual({
    canUseEventListeners: true,
    canUseViewport: true,
    canUseWorkers: false,
    isBrowser: true,
    isServer: false,
  })
})
