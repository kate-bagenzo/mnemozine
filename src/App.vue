<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import {Howl} from 'howler';


import { progress } from './state/progress.ts';
import StartContract from './components/StartContract.vue';
import { ref, watch } from 'vue';
import { theme } from './state/theme.ts';
import { songs } from './state/songs.ts';

document.addEventListener('dragover', event => event.preventDefault())
document.addEventListener('drop', event => event.preventDefault())

</script>

<script lang="ts">

watch(theme, () => {
  if (theme.current == '16') {
    document.querySelector('body')?.classList.remove('theme-8');
  } else if (theme.current == '8') {
    document.querySelector('body')?.classList.add('theme-8');
  }
});

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    setTimeout(() => {
      document.getElementById('main-view')?.scrollTo(0,0);
    }, 500);
  },
});

const routerPath = ref(router.currentRoute.value.name);


router.afterEach((to) => {
  if (to.fullPath.includes('intrazone')) {
    theme.current = '8';
  } else {
    theme.current = '16';
  }
  routerPath.value = router.currentRoute.value.name;
});

function goHome() {
  router.push({path: '/dorset/main'});
  songs.playClick();
}

function goChest() {
  router.push({path: '/myself/chest'});
  songs.playClick();
}

function goOptions() {
  router.push({path: '/myself/options'});
  songs.playClick();
}

function goBack() {
  console.log(routerPath);
  router.go(-1);
  songs.playClick();
}

function goForward() {
  router.go(1);
  songs.playClick();
}

if (import.meta.hot) { 
  handleHotUpdate(router) 
}

let xCount = 0;
const body = document.querySelector('body');
window.addEventListener('keydown', (e) => {
  if (e.key == 'x' || e.key == 'X' && (e.target === body) && !progress.wizardMode) {
    xCount++;
  } else {
    xCount = 0;
  }
  if (xCount >= 5) {
    progress.wizardMode = true;
    songs.playSnd('wizard');
    xCount = 0;
    setTimeout(() => {progress.wizardMode = false}, 5000);
  }
});

</script>

<template>
  <div v-if="progress.signedContract" id="lucarne-bar" class="titlebar">
    <img src="/images/cube.gif" v-if="theme.current == '16'"><img v-else src="/images/cube8.gif">lucarne browser
    <span v-if="progress.wizardMode">[WIZARD MODE]</span>
  </div>
  <div v-else id="contract-bar" class="titlebar"></div>
  <nav v-if="progress.signedContract" id="main-nav">
    <ol>
      <li class="history"><button @click="goBack" class="backbutton"><p><</p></button><button @click="goForward" class="forwardbutton"><p>></p></button></li>
      <li><button @click="goHome"><img src="/images/house.gif" v-if="theme.current == '16'"><img v-else src="/images/house8.gif">Home</button></li>
      <li><button @click="goChest"><img src="/images/book.gif" v-if="theme.current == '16'"><img v-else src="/images/book8.gif">Hope Chest</button></li>
      <li><button @click="goOptions"><img src="/images/gear.gif" v-if="theme.current == '16'"><img v-else src="/images/gear8.gif">Options</button></li>
    </ol>
  </nav>
  <main v-if="progress.signedContract" id="main-view">
    <Transition>
      <aside id="wizardMode" v-if="progress.wizardMode">
        <h1>cast spell...</h1>
        <img src="/images/wizard.gif">
      </aside>
    </Transition>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </main>
  <main v-if="progress.signedContract == false" id="contract-view">
    <StartContract />
  </main>
  <nav v-if="progress.signedContract" id="status-nav">{{ routerPath }}</nav>
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0%;
  }
  main {
    overflow-y: auto;
  }
  main:has(#wizardMode) {
    overflow: hidden;
    scrollbar-gutter: stable;
  }
  #wizardMode {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 500;
    background: color-mix(in srgb, $lightblue 70%, transparent);
    background-blend-mode: difference;
    padding: 1rem;
    padding-top: 0.5rem;
    font-size: 5rem;
    color: $white;
    font-family: 'fancy';
    pointer-events: none;
    img {
      position: absolute;
      bottom: 75px;
      right: 1px;
      filter: invert(200%);
    }
  }
#wizardMode.v-enter-active,
#wizardMode.v-leave-active {
  transition: opacity 0.5s ease;
}

#wizardMode.v-enter-from,
#wizardMode.v-leave-to {
  opacity: 0;
}
</style>
