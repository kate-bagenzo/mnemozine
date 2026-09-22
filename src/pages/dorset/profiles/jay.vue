<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { progress } from '../../../state/progress';
import { songs } from '../../../state/songs';


if (!progress.unlockedPages.includes('jay')) {
    progress.unlockedPages.push('jay');
}

songs.changePlaying('1500g');

</script>

<template>
    <section class="jay">
        <div>
        <pre>
  ░██                       ░██                                                           
                            ░██                                                           
  ░██  ░██████   ░██    ░██ ░██  ░███████     ░████████   ░██████    ░████████  ░███████  
  ░██       ░██  ░██    ░██     ░██           ░██    ░██       ░██  ░██    ░██ ░██    ░██ 
  ░██  ░███████  ░██    ░██      ░███████     ░██    ░██  ░███████  ░██    ░██ ░█████████ 
  ░██ ░██   ░██  ░██   ░███            ░██    ░███   ░██ ░██   ░██  ░██   ░███ ░██        
  ░██  ░█████░██  ░█████░██      ░███████     ░██░█████   ░█████░██  ░█████░██  ░███████  
  ░██                   ░██                   ░██                          ░██            
░███              ░███████                    ░██                    ░███████             
        </pre>
        <header>
            <img src="/images/profiles/jay.webp">
            <h1>jay</h1>
            <p>47</p>
            <p>(he/him)</p>
            <p>programmer, roboticist, technologist, and your cranky old sysadmin on this server</p>
            <p></p>
            <hr>
            <p>likes: cats, tinkering, toymaking, old movies, media, and culture of the 21st century</p>
            <details>
                <summary>what is this?</summary>
                in the 21st century, personal pages would often include a header like this, listing little facts about the user. even though you probably already know all this stuff (or could find it out easily by querying Information Control) it's fun to get it in such an analog way!
            </details>
        </header>
        <section class="override">
            <p>somewhat embarrassingly, i don't actually have much on here at the moment!</p>
            <p>i've deleted my old blog - don't worry, old links to individual articles will still work for a time - but this page is a bit sparse.</p>
            <p>catch up with me on <RouterLink @click="songs.playClick" to="/dorset/forum/main">the board</RouterLink> if you want to chat!</p>
        </section>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.jay {
    width: 100%;
    height: 100%;
    color: $white;
    font-family: 'm5x7';
    font-size: 48px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    div {
        height: 100%;
        background-image: url('/images/space.gif');
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    section {
        background-color: $darkblue;
        border: 2px solid $white;
        font-size: 32px;
        padding: 1rem;
        margin-bottom: 2rem;
        a {
            background-color: $white;
            color: $darkblue;
        }
    }
    pre {
        font-family: monospace;
        font-size: 8px;
        text-align: center;
        background-color: $darkblue;
        border: 2px solid $white;
    }
    header {
        background-color: $darkblue;
        border: 2px solid $white;
        padding: 0.5rem;
        font-size: 32px;
        img {
            border: 2px solid $darkgray;
            border-top: 2px solid $lightgray;
            border-left: 2px solid $lightgray;
            float: left;
            margin-right: 1rem;
        }
    }
}
</style>