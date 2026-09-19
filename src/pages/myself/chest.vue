<script setup lang="ts">
import { ref } from 'vue';
import { progress } from '../../state/progress';

const pageNum = ref(0);

</script>

<template>
    <section class="chest">
        <section class="items">
            <header>
                <h1>{{ progress.contractHolder }}'s</h1>
                <h1>Hope Chest</h1>
                <img src="/images/flowers.webp">
            </header>
            <main v-if="progress.unlockedPages.includes('jay')">
                <h2><button><</button>Jay<button>></button></h2>
                <div class="jay-card">
                    <img src="/images/compascii.webp">
                    <div>
                        <p>jay@dorset</p>
                        <p>username: <input></p>
                        <p>age: <input></p>
                        <p>server uptime: <input></p>
                        <p>operating system: <input></p>
                    </div>
                </div>
            </main>
            <main v-else class="info">
                <p>You haven't seen any characters yet.</p>
            </main>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.chest {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-family: 'crimson';
    background-image: url('/images/curve.webp');
    height: 100%;
    background-color: $black;
    padding-top: 1rem;
    overflow-x: hidden;
    .jay-card {
        width: 100%;
        background-color: $black;
        font-family: 'dm mono';
        padding: 1rem;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            all: unset;
        }
        p {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        input {
            border-bottom: 2px solid $white;
        }
    }
    h1 {
        color: $white;
        font-size: 4rem;
        text-align: center;
        animation: fadein 2s;
    }
    .info p,
    h2 {
        background-color: $purple;
        border-radius: 0.25rem;
        font-size: 1.5rem;
        padding: 0.5rem;
    }
    main {
        background-color: $purple;
        background-image: url('/images/stone.webp');
        padding: 1rem;
        margin-top: -2.2rem;
        padding-top: 3rem;
        color: $white;
        text-align: center;
        border-radius: 0.5rem;
        button {
            all: unset;
            background-color: $white;
            color: $purple;
            border-radius: 1rem;
            width: 1.5rem;
            font-weight: bold;
        }
        h2 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
    }
}
</style>