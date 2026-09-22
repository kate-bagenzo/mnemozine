import { reactive } from "vue";


export const progress = reactive({
    signedContract: false,
    contractHolder: 'ERROR',
    unlockedPages: ['help'],
    wizardMode: false,
    jayPage: {age: {guess: '', correct: ['48']}, uptime: {guess: '', correct: ['1 year', 'one year', 'a year']}, userName: {guess: '', correct: ['curmudgeonlycorvid']}}
});