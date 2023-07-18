import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Code:400,700&display=swap' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  title: "clintp.xyz",
  titleTemplate: 'clintp.xyz | :title',
  description: "my bio in two mouse clicks or less",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  }
})
