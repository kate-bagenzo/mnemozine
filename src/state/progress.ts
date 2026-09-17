import { reactive } from "vue";


export const progress = reactive({
    signedContract: false,
    contractHolder: 'ERROR',
    unlockedPages: ['help'],
    wizardMode: false
});