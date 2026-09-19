<script setup lang="ts">
import { ref, Transition } from 'vue';

    function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    const numArray = ref(['0']);

    function setTime() {
        const newArray = [];
        let month = getRandomIntInclusive(1,12).toString();
        if (month.toString().length == 1) {month = '0' + month};
        newArray.push(month);
        
        let day = getRandomIntInclusive(1,31).toString();
        if (day.toString().length == 1) {day = '0' + day};
        newArray.push(day);

        let hour = getRandomIntInclusive(0,23).toString();
        if (hour.toString().length == 1) {hour = '0' + hour};
        newArray.push(hour);
        let min = getRandomIntInclusive(0,59).toString();
        if (min.toString().length == 1) {min = '0' + min};
        newArray.push(min);

        numArray.value = newArray;
    }
    setTime();
    setInterval(setTime, 5000);
</script>

<template>
    <Transition>
            <time :key="numArray">2122-{{ numArray[0] }}-{{ numArray[1] }} {{ numArray[2] }}:{{ numArray[3] }}</time>
    </Transition>
</template>

<style lang="scss" scoped>
    time {
        position: absolute;
        margin-left: 0.5rem;
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }
    .v-enter-from,
    .v-leave-to {
    transition: opacity 0.5s ease;
    opacity: 0;
    }
</style>