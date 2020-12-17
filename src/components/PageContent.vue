<template>
    <inner-content/>
</template>

<script>
import fm from './index.md'

export default {
  name: 'HelloWorld',
  components: {
    InnerContent: fm.vue.component
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
