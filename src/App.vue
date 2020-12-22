<template>
  <div class="container">
    <GithubLogo/>
    <PageContent/>
    <TerminalPrompt/>
  </div>
</template>

<script>
import 'terminal.css'
import GithubLogo from './components/GithubLogo.vue'
import TerminalPrompt from './components/TerminalPrompt.vue'
import fm from './index.md'

export default {
  name: 'App',
  components: {
    GithubLogo,
    PageContent: fm.vue.component,
    TerminalPrompt
  },
  mounted () {
    this.$ga.page('/') // track page hit with vue-analytics
  }
}
</script>

<style>/** https://github.com/Gioni06/terminal.css/blob/master/src/layouts/dark.ejs */
:root {
  --global-font-size: 15px;
  --global-line-height: 1.4em;
  --global-space: 10px;
  --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
    serif;
  --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
    serif;
  --background-color: #222225;
  --page-width: 60em;
  --font-color: #e8e9ed;
  --invert-font-color: #222225;
  --secondary-color: #a3abba;
  --tertiary-color: #a3abba;
  --primary-color: #62c4ff;
  --error-color: #ff3c74;
  --progress-bar-background: #3f3f44;
  --progress-bar-fill: #62c4ff;
  --code-bg-color: #3f3f44;
  --input-style: solid;
  --display-h1-decoration: none;
}
</style>
