<script setup lang="ts">
import { songs } from '../../../../state/songs';


songs.changePlaying('investigation');

</script>

<template>
    <section class="game">
        <iframe src="/src/assets/BoxElf.html"></iframe>
    </section>
</template>

<style lang="scss" scoped>
.game {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
    iframe {
        width: 100%;
        height: 100%;
    }
</style>