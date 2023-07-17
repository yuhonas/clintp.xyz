import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Code:400,700&display=swap' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],


  ],
  title: "clintp.xyz",
  description: "My bio in two mouse clicks or less",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  }
})
