<script setup lang="ts">
import { songs } from '../../state/songs';


songs.changePlaying('reading');

</script>

<template>
    <section class="congrats">
        <section>
            <h1>Congratulations!</h1>
            <p>You've reached the end of the demo.</p>
        </section>
        <section>
            <p>I hope this was somewhat interesting!</p>
            <p>The full version will be far less linear, packed with far more pages - with more music and images - and not necessarily in the order that I've arranged it here.</p>
            <p>This little demo exists mostly to give you a feel for the game, and the types of puzzles that can be made possible within it.</p>
            <p>Thank you for making it this far!</p>
        </section>
        <section>
            <p>Try filling out Jay's character page in the Hope Chest if you haven't already!</p>
            <p>Right now it doesn't have any use, but I plan for time to pass when character pages are completed, unlocking access to new sites.</p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.congrats {
    padding: 1rem;
    font-family: 'vga';
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    gap: 0.5rem;
    section {
        padding: 0.5rem;
        background-color: $darkblue;
        color: $white;
        border: 2px solid $blue;
    }
}
</style>