<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'


import { progress } from './state/progress.ts';
import StartContract from './components/StartContract.vue';
import { ref } from 'vue';

</script>

<script lang="ts">

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
  document.getElementById('main-view')?.scrollTo(0,0);
  }
});

const linkNum = ref(0);

router.afterEach(() => {
  const newNum = document.querySelectorAll('a');
  linkNum.value = newNum.length;
});

function goHome() {
  router.push({path: '/dorset/dorset'});
  console.log(router);
}

function goBack() {
  router.go(-1);
}

function goForward() {
  router.go(1);
}

if (import.meta.hot) { 
  handleHotUpdate(router) 
} 

</script>

<template>
  <div v-if="progress.signedContract" id="lucarne-bar" class="titlebar"><img src="/images/cube.gif">lucarne browser</div>
  <div v-else id="contract-bar" class="titlebar"></div>
  <nav v-if="progress.signedContract" id="main-nav">
    <ol>
      <li class="history"><button @click="goBack" class="backbutton"><p><</p></button><button @click="goForward" class="forwardbutton"><p>></p></button></li>
      <li><button @click="goHome"><img src="/images/house.gif">Home</button></li>
    </ol>
  </nav>
  <main v-if="progress.signedContract" id="main-view">
    <RouterView />
  </main>
  <main v-if="progress.signedContract == false" id="contract-view">
    <StartContract />
  </main>
  <aside v-if="progress.wizardMode">
    <h1>cast spell...</h1>
    <img src="/images/wizard.gif">
  </aside>
  <nav v-if="progress.signedContract" id="status-nav">{{ linkNum }} links</nav>
</template>

<style lang="scss" scoped>
  main {
    overflow-y: auto;
    scrollbar-color: $darkblue $lightblue;
  }
</style>
