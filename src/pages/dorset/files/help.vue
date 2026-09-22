<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { songs } from '../../../state/songs';

songs.changePlaying('1500g');

</script>

<template>
    <section class="file">
        <section class="content">
            <h1>Help and FAQ</h1>
            <hr>
            <p>Dorset is an interconnected computing project, based on person computers from the early-to-middle 21st century. Instead of dialling in to a master computer like Information Control, we all share individual accounts on a single computer. From these accounts, we can create pages, chat online, and more!</p>
            <p>While the actual physical "computer" of Dorset is really being emulated by Information Control, that doesn't mean the software isn't authentic. I've put a lot of work into ensuring that the experience is as historically accurate as you can get!</p>
            <p>The best way to get a feel for what Dorset is is to just go out and explore it. You can start by <RouterLink @click="songs.playClick" to="/dorset/profiles/jay">heading over to my page.</RouterLink> Once you're set up with the system, you'll be able to create a user page just like mine, and fill it with whatever you want!</p>
            <p>Some of you already-old-web-fanatics might be wondering if there's a sitemap, or some list of each user's pages. Not exactly! Dorset is a little bit-different from the oldweb you've read about. Ancient technologies like HTML allowed sites to link to whatever other site they want... this lead to a sprawling, huge networks, often filled with unverifiable or (worst case!) outright dangerous content. This is very different compared to more modern protocols, where each link needs to be approved by both the link-setter and the destination. It might make it a little tricky to browse, but it's the price we have to pay. Don't worry - once you've used a link, you can always revisit it from your history on the Dorset home page.</p>
            <p>Whew, that's it! You're ready to get started. I hope you enjoy your time "on-line!"</p>
            <p>- Jay</p>
        </section>
    </section>

</template>

<style lang="scss" scoped>
.file {
    margin: 1rem;
    margin-top: 10%;
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'crimson';
    h1 {
        font-size: 4rem;
        font-weight: bold;
        color: $darkblue;
    }
    .content {
        clip-path: polygon(85% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 0%);
        padding: 1.5rem;
        background-color: $yellow;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        line-height: 2rem;
        color: $black;
        max-width: 800px;
    }
    a {
        color: $white;
        background-color: $darkblue;
    }
}
</style>