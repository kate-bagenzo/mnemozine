<script setup lang="ts">
import { progress } from '../../../state/progress';


if (!progress.unlockedPages.includes('jay')) {
    progress.unlockedPages.push('jay');
}

</script>

<template>
    <section class="jay">
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
        <section>
            <p>somewhat embarrassingly, i don't actually have much on here yet!</p>
        </section>
    </section>

</template>

<style lang="scss" scoped>
.jay {
    width: 100%;
    height: 100%;
    background-image: url('/images/space.gif');
    color: $white;
    font-family: 'm5x7';
    font-size: 48px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
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