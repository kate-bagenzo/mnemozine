<script setup lang="ts">
import { songs } from '../../../../state/songs';

songs.changePlaying('investigation');
</script>

<template>
    <section class="rider">
        <img src="/images/rider.gif">
        <h1>r1d3r</h1>
        <section>
            <p>i don't answer questions about this site anymore.</p>
            <p>on thin ice as it is.</p>
            <p>my articles are gone, but if you know what to search for...</p>
        </section>
        <hr>
        <section>
            <p>i used to make games.</p>
            <p>those are gone too. not for my safety, but just because none of them were any good.</p>
            <p>but due to popular demand, you can still play <RouterLink @click="songs.playClick" to="/intrazone/sites/r1d3r/BoxElf">BOXELF</RouterLink>.</p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
    .rider {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: $purple;
        color: $white;
        height: 100%;
        font-family: 'xfile';
        gap: 0.5rem;
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p {
                text-align: center;
            }
        }
        hr {
            border: none;
            border-bottom: 2px dashed $white;
            width: 100%;
        }
        img {
            border-radius: 0.5rem;
        }
        a {
            text-decoration: underline;
            font-size: 1.25rem;
        }
    }
</style>