<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { songs } from '../state/songs';


const counter = ref(0);
const anim = ref(1);
let dots = ref('.');

const winHeight = ref(window.innerHeight);
const winWidth = ref(window.innerWidth);

const router = useRouter()
const goals = [3,4,6,9,10,15];

window.addEventListener('resize', function() {
    winHeight.value = window.innerHeight;
    winWidth.value = window.innerWidth;
}, true);

let counterInterval = setInterval(() => {
    counter.value++;
    if (goals.indexOf(counter.value) != -1) {
        songs.playSnd('beep');
    }
    if (counter.value == 19) {
        songs.playSnd('startup');
        router.replace({path: '/dorset/main'})
        clearInterval(counterInterval);
    }
}, 1000);

setInterval(() => {
    switch (anim.value) {
        case 1:
            dots.value = '.'
            break;
        case 2:
            dots.value = '..'
            break;
        case 3:
            dots.value = '...'
            break;
        case 4:
            anim.value = 0;
            dots.value = '.';
    }
    anim.value++;
}, 500);

</script>

<template>
    <section class="booting">
        <aside class="a1" v-if="counter >= 3">Titan Emulated BIOS v5.682</aside>
        <aside class="a2" v-if="counter >= 4">Copyright (C) 2012-2212, Lucarne Software, Inc.</aside>
        <aside class="a3" v-if="counter >= 6">Processor: ZA1-Z4M-9AR</aside>
        <aside class="a4" v-if="counter >= 7">Memory: <em v-if="counter >= 9">Forgotten - Check MB</em></aside>
        <aside class="a5" v-if="counter >= 9">Display: {{ winWidth }} x {{ winHeight }}</aside>
        <hr class="a8" v-if="counter >= 10">
        <aside class="a6" v-if="counter >= 10 && counter < 15">Connecting to Dorset{{ dots }}</aside>
        <aside class="a7" v-else-if="counter >= 15">Connection OK</aside>
        <aside class="a7" v-if="counter >= 15">Redirecting{{ dots }}</aside>
    </section>
</template>

<style lang="scss" scoped>
    .booting {
        background-color: $black;
        width: 100%;
        height: 100%;
        color: $white;
        font-family: 'm3x6';
        font-size: 48px;
        padding: 1rem;
        animation: fadein 5s;
    }
    .a1 {
        color: $yellow;
    }
    .a2 {
        color: $pink;
    }
    .a3 {
        color: $orange;
    }
    .a4 {
        color: $brown;
    }
    .a5 {
        color: $blue;
    }
    .a6 {
        color: $yellow;
    }
    .a7 {
        color: $green;
    }
    em {
        color: $red;
    }
    hr {
        border: none;
        border-bottom: 2px dashed $yellow;
    }
</style>