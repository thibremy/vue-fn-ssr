import { createLocalVue, shallowMount } from '@vue/test-utils'
import { render, renderToString } from '@vue/server-test-utils'
import { plugin } from 'vue-function-api'

export const ssrTemplateDefault = `
  <code>
  {{JSON.stringify(ssr)}}
  </code>
`

export const renderSetup = (setup: any, component = {}, options = {}): any => {
  const localVue = createLocalVue()
  localVue.use(plugin)

  return render(
    {
      name: 'SSRCpntTest',
      setup,
      template: ssrTemplateDefault,
      ...component,
    },
    {
      localVue,
      ...options,
    }
  )
}

export const renderToStringSetup = (setup: any, component = {}, options = {}): any => {
  const localVue = createLocalVue()
  localVue.use(plugin)

  return renderToString(
    {
      name: 'SSRCpntTest',
      setup,
      template: ssrTemplateDefault,
      ...component,
    },
    {
      localVue,
      ...options,
    }
  )
}

export const shallowMountSetup = (setup: any, component = {}, options = {}): any => {
  const localVue = createLocalVue()
  localVue.use(plugin)

  return shallowMount(
    {
      name: 'SSRCpntTest',
      setup,
      template: ssrTemplateDefault,
      ...component,
    },
    {
      localVue,
      ...options,
    }
  )
}
