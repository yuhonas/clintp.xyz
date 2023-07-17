// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'

import 'tailwindcss/tailwind.css'
import './theme.css'

// import tailwind base, component and utlities
// import 'tailwindcss/base.css'
// import 'tailwindcss/components.css'
// import 'tailwindcss/utilities.css'


export default {
  Layout,
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // }
}
