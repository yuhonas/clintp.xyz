import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Code&display=swap' }],

  ],
  title: "clintp.xyz",
  description: "My bio in two mouse clicks or less",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  }
})
