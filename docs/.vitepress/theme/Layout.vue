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
  },
  methods: {
    swapTheme(theme, event) {
      event.preventDefault();
      document.querySelector('body').dataset.theme = theme;
      this.currentTheme = theme;
    },
    nextTheme(event) {
      // move to the next theme in the themes array based on our currentTheme
      const currentIndex = this.themes.indexOf(this.currentTheme);
      const nextIndex = (currentIndex + 1) % this.themes.length;
      const nextTheme = this.themes[nextIndex];

      this.swapTheme(nextTheme, event);
    }
  },
  data() {
    return {
      currentTheme: '001',
      themes: ['001', '002', '003']
    }
  }
}

</script>

<template>
  <GithubCorner repo="yuhonas/clintp.xyz" />
  <main>
    <h1 class="font-extrabold text-white my-2 md:my-1 ms-4 md:text-lg">
      <a href="" @click="nextTheme">$ ./clintp.xyz</a>
    </h1>

    <div class="max-w-2xl mx-auto">
      <nav class="theme-bg rounded-t-md p-3 mt-2 hidden md:block">
        <div class="flex gap-1.5">
          <a href="" @click="swapTheme('001', $event)"><div class="w-2.5 h-2.5 bg-red-400 rounded-full"></div></a>
          <a href="" @click="swapTheme('002', $event)"><div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div></a>
          <a href="" @click="swapTheme('003', $event)"><div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div></a>
        </div>
      </nav>
      <section class="theme-bg terminal text-white rounded-b-md px-3 pb-4 font-mono md:max-w-2xl mb-4 h-[80vh]">
          <article class="md:overflow-y-scroll markdown pb-4 h-full pe-1">
            <div v-if="page.isNotFound">
              <h2 class="text-xl mb-4">404 - Page Not Found</h2>
              <p class="mb-4">
                  But fear not, we've dispatched our squad of pixelated Ghostbusters to hunt it down, who you gonna call? 🕹️👻
                  <a href="https://www.youtube.com/watch?v=Fe93CLbHjxQ">
                    <img src="./images/404.svg" class="mx-auto mt-8 w-1/2 animate-pulse hover:animate-spin" alt="Ghostbusters Logo" />
                  </a>
              </p>
            </div>
            <div v-else>
              <img  alt="ANSI Art Graphics" class="w-full mb-4 ansi-art" />

              <Content />
            </div>
          </article>
      </section>
    </div>
  </main>
</template>
