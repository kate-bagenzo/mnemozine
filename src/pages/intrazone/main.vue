<script setup lang="ts">
import { ref, watch } from 'vue';
import { router } from '../../App.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const search = ref('');

function submitClick(event: any) {
    const userSearch = event.target.elements['searching'].value;
    search.value = userSearch;
}


    

</script>

<template>
    <section class="intrazone">
        <h1>INTRAZONE</h1>
        <hr>
        <section>
            <h2>search archives</h2>
            <form @submit.stop.prevent="submitClick">
                <input maxlength="12" spellcheck="false" name="search" id="searching" value="">
            </form>
        </section>
        <section class="results" v-if="search != ''">
            <h2>results for query "{{ search }}"</h2>
            <main v-if="search.includes('2012')">
                <RouterLink to="/intrazone/sites/r1d3r/2012">2012: The END of HUmanity</RouterLink>
            </main>
            <main v-else>
                nothing found...
            </main>
        </section>
    </section>

</template>

<style lang="scss" scoped>
    .intrazone {
        font-family: 'charon mono';
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        hr {
            border: none;
            width: 100%;
            border-bottom: 2px dashed $red;
        }
        h1 {
            margin-top: 1rem;
            color: $white;
            font-family: 'barcode';
            font-size: 5rem;
        }
        section {
            border-radius: 0.25rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 70%;
            background-color: $white;
            h2 {
                color: $red;
            }
            input {
                all: unset;
                height: 2rem;
                color: $darkgreen;
                font-weight: bold;
            }
        }
        .results {
            animation: fadein 0.75s;
        }
    }
</style>