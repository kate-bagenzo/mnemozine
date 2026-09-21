<script setup lang="ts">
import { ref } from 'vue';
import { router } from '../../../App.vue';
import { progress } from '../../../state/progress.ts';


const buttonLocked = ref(true);

function openArchive() {
    if (!buttonLocked.value) {
        router.push({path: '/myself/demoEnd'});
    }
}
function openLock() {
    if (progress.wizardMode) {
        buttonLocked.value = false;
        progress.wizardMode = false;
    }
}

</script>

<template>
    <section class="manifesto">
        <h1>manifesto</h1>
        <h1>modus operandi</h1>
        <h1>belief</h1>
        <section class="entrance">
            <button @click="openArchive">~enter archives~</button>
            <img v-if="buttonLocked" @click="openLock" src="/images/lock.webp" class="lock">
        </section>
        <section>
            <p>the INTRAZONE is a community of artists, weirdos, and know-it-alls.</p>
            <p>we create things for each other.</p>
            <p>enjoy yourself, take in the work, but know that nothing you see here is for you.</p>
            <p>be respectful.</p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.manifesto {
    h1 {
        font-family: 'barcode';
        font-size: 4rem;
        color: $white;
        width: 50%;
        &:first-of-type {
            text-align: left;
        }
        &:last-of-type {
            text-align: right;
        }
    }
    padding: 1rem;
    font-family: 'charon mono';
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    section {
        color: $purple;
        background-color: $white;
        padding: 1rem;
        border-radius: 0.25rem;
        font-size: 1.25rem;
        p {
            margin: 1rem;
        }
    }
    button {
        all: unset;
        text-decoration: underline;
        color: $red;
    }
    .entrance {
        position: relative;
        img {
            position: absolute;
            top: 0;
            left: 35%;
        }
    }
    .lock {
        z-index: 500;
    }
}
</style>