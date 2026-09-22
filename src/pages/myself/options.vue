<script setup lang="ts">
import { ref } from 'vue';
import { songs } from '../../state/songs';

const tempVol = ref(songs.volume);

function setMusicVol(e: any) {
    songs.setVolume(e.target.value);

}

</script>

<template>
    <section class="options">
        <h1>Options</h1>
        <section>
            <h2>Volume</h2>
            <input type="range" id="musicVol" @change="setMusicVol" name="musicVol" min="0" max="1" step="0.1" v-model="songs.volume" />
        </section>
    </section>
</template>

<style lang="scss" scoped>
.options {
    background-image: url('/images/metal.webp');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-family: 'vga';
    height: 100%;
    h1 {
        font-size: 128px;
        color: $white;
    }
    h2 {
        font-size: 64px;
    }
    input {
        background-color: $darkblue;
        color: $darkblue;
        accent-color: $lightblue;
    }
    section {
        padding: 1rem;
        background-color: $darkgray;
        color: $white;
        border: 2px solid $white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>