<script setup>
import { useData } from 'vitepress'
const { page } = useData();
</script>
<script>
import GithubCorner from './GithubCorner.vue'

// load GithubCorner component
export default {
  components: {
    GithubCorner
  }
}

</script>

<template>
  <GithubCorner />
  <h1 class="font-extrabold text-white my-2 md:my-1 ms-4 md:text-lg">$ ./clintp.xyz</h1>
  <!-- <img src="./images/background.jpg" class="w-full object-cover absolute top-0 left-0 h-full -z-50" /> -->

  <!-- generated with https://johnfraney.ca/tools/responsive-image-generator/ -->
  <img
  class="w-full object-cover absolute top-0 left-0 h-full -z-50 hidden md:block"
  srcset="./images/background-400w.avif 400w, ./images/background-600w.avif 600w, ./images/background-800w.avif 800w, ./images/background-1000w.avif 1000w, ./images/background-1200w.avif 1200w, ./images/background-1600w.avif 1600w, ./images/background-2000w.avif 2000w"
  sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
  src="./images/background.jpg"
  alt=""
  width="3840"
  height="2160"
/>
  <div class="bg-slate-900 rounded-t-md p-3 mx-auto mt-2 max-w-2xl hidden md:block">
      <div class="flex gap-1.5">
        <div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
      </div>
    </div>
  <div class="terminal text-white bg-slate-900 rounded-b-md px-3 pb-4 mx-auto font-mono md:max-w-2xl mb-4 h-[80vh]">
      <div class="md:overflow-y-scroll markdown pb-4" style="max-height: 100%">
        <img src="./images/ansi-full.png" class="w-full mb-4" />

        <div v-if="page.isNotFound">
          Custom 404 page!
        </div>
        <Content v-else />
      </div>
  </div>

</template>
