<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <h1 class="font-extrabold text-white pt-1 ms-4 text-lg">$ ./clintp.xyz</h1>
  <img src="./images/background.jpg" class="w-full object-cover absolute top-0 left-0 h-full -z-50 mt-4" />

  <div class="bg-slate-900 rounded-t-md p-3 mx-auto mt-4 font-mono max-w-2xl ">
      <div class="flex gap-1.5">
        <div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
      </div>
    </div>
  <div class="container text-white bg-slate-900 rounded-b-md px-3 mx-auto font-mono max-w-2xl mb-4 h-[80vh]">
      <!-- <div class="flex gap-1.5 pb-3">
        <div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
      </div> -->

      <div class="overflow-y-scroll markdown pb-4" style="max-height: 100%">
        <img src="./images/ansi-full.png" class="w-full mb-4" />

        <div v-if="page.isNotFound">
          Custom 404 page!
        </div>
        <Content v-else />
      </div>
  </div>

</template>
