import {
  defineNuxtModule,
  createResolver,
  addImports,
  addComponent,
} from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'vue-echarts/nuxt',
    configKey: 'echarts',
  },
  setup(nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const path = resolve('../csp/index')

    nuxt.options.css.unshift(resolve('../csp/style.css'))

    addComponent({
      name: 'VChart',
      filePath: path,
      mode: 'all',
    })

    ;[
      'THEME_KEY',
      'INIT_OPTIONS_KEY',
      'UPDATE_OPTIONS_KEY',
      'LOADING_OPTIONS_KEY',
    ].forEach((name) =>
      addImports({ name, from: path }),
    )
  },
})
