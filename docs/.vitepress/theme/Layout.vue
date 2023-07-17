<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <h1 class="font-extrabold text-white pt-1 ms-4 text-lg">$ ./clintp.xyz</h1>
  <img src="./images/background.jpg" class="w-full object-cover absolute top-0 left-0 h-full -z-50" />

  <div class="container text-white bg-slate-900 rounded-md p-3 mx-auto mt-4 font-mono max-w-2xl mb-4">
      <div class="flex gap-1.5 pb-3">
        <div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
      </div>
    <div class="overflow-y-auto h-96 markdown">
        <img src="./images/ansi-full.png" class="w-full mb-4" />

        <div v-if="page.isNotFound">
          Custom 404 page!
        </div>
        <Content v-else />
    </div>

  </div>

</template>
