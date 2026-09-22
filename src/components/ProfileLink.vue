<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { progress } from '../state/progress';
import { songs } from '../state/songs';

</script>

<template>
    <section class="profiles">
        <RouterLink @click="songs.playClick" to="/dorset/files/help" class="text">
            <img src="/images/db_page.webp">
            <p>help.txt</p>
        </RouterLink>
        <RouterLink @click="songs.playClick" to="/dorset/profiles/jay" class="jay" v-if="progress.unlockedPages.includes('jay')">
            <img src="/images/bluecomp.webp">
            <p>jay</p>
        </RouterLink>
        <RouterLink @click="songs.playClick" to="/dorset/forum/main" class="glyph" v-if="progress.unlockedPages.includes('glyph')">
            <img src="/images/glyph.webp">
            <p>glyph</p>
        </RouterLink>
        <RouterLink @click="songs.playClick" to="/intrazone/main" class="intra" v-if="progress.unlockedPages.includes('intrazone')">
            <img src="/images/intrazone.webp">
            <p>intrazone</p>
        </RouterLink>
    </section>

</template>

<style lang="scss" scoped>
    .profiles {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-family: 'm3x6';
        font-size: 32px;
        gap: 0.5rem;
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.25s;
        &:hover {
            transition: all 0.25s;
            filter: drop-shadow(3px 3px $darkgray);
        }
    }
    .jay {
        color: $blue;
    }
    .text {
        color: $white;
    }
    .glyph {
        color: $red;
    }
    .intra {
        color: $green;
    }
</style>