<script>
export default {
  props: ['repo'],
  created() {
    this.repoUrl = new URL(this.repo, 'https://www.github.com/')
  }
}
</script>
<template>
  <a :href="repoUrl">
    <img alt="github" src="./images/github-logo.svg" class="z-10 absolute top-2 right-3 w-5 md:w-8 hover:animate-spin">
  </a>
</template>
