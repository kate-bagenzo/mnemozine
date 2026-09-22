<script setup lang="ts">
import { ref } from 'vue';
import { progress } from '../state/progress';
import { songs } from '../state/songs';
import { router } from '../App.vue';


const yourName = ref('');
const checkedBoxes = ref([]);

function confirmContract() {
  progress.contractHolder = yourName.value;
  progress.signedContract = true;
  songs.stopPlaying();
  router.replace({path: '/'});
}

songs.changePlaying('greenfog')

</script>

<template>
    <form class="fadein">
      <h1><em>C</em>ontract of <em>M</em>nemozine</h1>
      <h2>1. The Obligations of the Player</h2>
      <section>
        <input @click="songs.playSnd('bell')" type="checkbox" value="1" v-model="checkedBoxes">
        <p>I, the Player, will enter the world of Mnemozine and take on the form of the following cursor: <img src="/images/cursor/default.webp"> </p>
      </section>
      <section>
        <input @click="songs.playSnd('bell')" type="checkbox" value="2" v-model="checkedBoxes">
        <p>As the player, I will be responsible for investigating the lives of the inhabitants of the world.</p>
      </section>
      <section>
        <input @click="songs.playSnd('bell')" type="checkbox" value="3" v-model="checkedBoxes">
        <p>This obligation extends not only to the real (fictional) characters, but to the in-world fictional (fictional) characters as well.</p>
      </section>
      <section>
        <input @click="songs.playSnd('bell')" type="checkbox" value="4" v-model="checkedBoxes">
        <p>I will record my observations about each character in pages stored in the Hope Chest.</p>
      </section>
      <section>
        <input @click="songs.playSnd('bell')" type="checkbox" value="5" v-model="checkedBoxes">
        <p>Once I enter the world, I can access the Hope Chest by clicking the button in the toolbar.</p>
      </section>
      <h2 v-if="checkedBoxes.length >= 5">2. Choice and Consequence</h2>
      <section v-if="checkedBoxes.length >= 5">
        <input @click="songs.playSnd('bell')" type="checkbox" value="6" v-model="checkedBoxes">
        <p>I agree that my progress will be saved when the Disk Icon appears in the top right of toolbar.</p>
      </section>
      <section v-if="checkedBoxes.length >= 5">
        <input @click="songs.playSnd('bell')" type="checkbox" value="7" v-model="checkedBoxes">
        <p>I accept that my progress will not be automatically saved if I forcibly close the world.</p>
      </section>
      <section v-if="checkedBoxes.length >= 5">
        <input @click="songs.playSnd('bell')" type="checkbox" value="8" v-model="checkedBoxes">
        <p>My task may become tedious or difficult to complete if I forget key details of the story. I will remedy this by taking notes, if possible.</p>
      </section>
      <h2 v-if="checkedBoxes.length >= 8">3. Escape Clause</h2>
      <section v-if="checkedBoxes.length >= 8">
        <input @click="songs.playSnd('bell')" type="checkbox" value="9" v-model="checkedBoxes">
        <p>If I find something unexpected or strange in the world, I will contact the developers immediately.</p>
      </section>
      <h2 v-if="checkedBoxes.length >= 9">4. Plea</h2>
      <section v-if="checkedBoxes.length >= 9">
        <input @click="songs.playSnd('bell')" type="checkbox" value="10" v-model="checkedBoxes">
        <p>I promise, to the best of my ability, to find the truth.</p>
      </section>
      <section v-if="checkedBoxes.length >= 10">
        <input type="checkbox" value="11" v-model="checkedBoxes">
        <p>Please.</p>
      </section>
      <section v-if="checkedBoxes.length >= 11">
        <input type="checkbox" value="12" v-model="checkedBoxes">
        <p>Please, please, please.</p>
      </section>
      <section v-if="checkedBoxes.length >= 12">
        <input type="checkbox" value="13" v-model="checkedBoxes">
        <p>I was something, or someone, once.<br>I shall not be that thing again.</p>
      </section>
      <section v-if="checkedBoxes.length >= 13">
        <input @click="songs.playSnd('bell')" type="checkbox" value="14" v-model="checkedBoxes">
        <p>Help me remember.</p>
      </section>
      <aside class='confirmation' v-if="checkedBoxes.length >= 14">
          <hr>
          <h2>5. Confirmation</h2>
          <p><strong>In exchange for my VOICE, and the agreement of the above terms, I, </strong><input @input="songs.playSnd('keypress')" spellcheck="false" v-model="yourName" type="text" placeholder="your name"><strong>, will enter the world.</strong></p>
          <button v-if="yourName.length > 0" @click="confirmContract">confirm</button>
      </aside>
    </form>
</template>

<style>
form {
    margin: 1rem;
    animation: fadein 5s;
    user-select: none;
}
</style>