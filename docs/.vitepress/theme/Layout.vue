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
  <main>
    <h1 class="font-extrabold text-white my-2 md:my-1 ms-4 md:text-lg">$ ./clintp.xyz</h1>

    <div class="max-w-2xl mx-auto">
      <nav class="bg-slate-900 rounded-t-md p-3 mt-2 hidden md:block">
        <div class="flex gap-1.5">
          <div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
          <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
          <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
        </div>
      </nav>
      <section class="terminal text-white bg-slate-900 rounded-b-md px-3 pb-4 font-mono md:max-w-2xl mb-4 h-[80vh]">
          <article class="md:overflow-y-scroll markdown pb-4" style="max-height: 100%">
            <img src="./images/ansi-full.png" class="w-full mb-4" />

            <div v-if="page.isNotFound">
              <h2 class="text-xl mb-4">404 - Page Not Found</h2>
              <p class="mb-4">
                  But fear not, we've dispatched our squad of pixelated Ghostbusters to hunt it down, who you gonna call? 🕹️👻
              </p>
            </div>
            <Content v-else />
          </article>
      </section>
    </div>
  </main>
</template>
