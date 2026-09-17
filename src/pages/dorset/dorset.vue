<script setup lang="ts">
import { ref } from 'vue';
import ProfileLink from '../../components/ProfileLink.vue';

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const userCount = ref(getRandomIntInclusive(3400, 4100));

setInterval(() => {
    if (getRandomIntInclusive(0,1)) {
        userCount.value = userCount.value - getRandomIntInclusive(1,5);
    } else {
        userCount.value = userCount.value + getRandomIntInclusive(1,5);
    }
}, 10000);

</script>

<template>
    <div class="dorset">
        <section>
            <img src="/images/server.webp">
        <pre>
      _                     _   
     | |                   | |  
   __| | ___  _ __ ___  ___| |_ 
  / _` |/ _ \| '__/ __|/ _ \ __|
 | (_| | (_) | |  \__ \  __/ |_ 
  \__,_|\___/|_|  |___/\___|\__|
        </pre>
        <h2>our digital arcology</h2>
        <hr />
            <p>accessible pages/users/tools:</p>
            <ProfileLink></ProfileLink>
            <hr />
            <h3>server status</h3>
            <p>dorset is currently <em>online</em></p>
            <p><em>{{ userCount }}</em> users logged in</p>
            <h3>message of the day</h3>
            <p class="pink">be careful! full moon out tonight...</p>
            <hr />
            <p>if you're interested in contributing to the project or just need general tech support, feel free to stop by the Q4A2 library cluster</p>

        </section>
    </div>
</template>

<style lang="scss" scoped>
.dorset {
    font-family: 'dm mono';
    color: $white;
    height: 100%;
    line-height: 1.25rem;
    padding: 0.5rem;
    .pink {
        color: pink;
    }
    h2 {
        font-size: 2rem;
        font-family: 'thisfont';
    }
    h3 {
        font-size: 1.5rem;
        margin: 0.5rem;
    }
    hr {
        color: #deeed6;
    }
    em {
        color: $green;
        text-decoration: underline;
    }
    img {
        float: left;
        border: 2px solid #deeed6;
        margin-right: 0.5rem;
    }
    pre {
        font-family: monospace;
    }
}

</style>