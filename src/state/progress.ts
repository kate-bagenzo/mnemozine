import { reactive } from "vue";


export const progress = reactive({
    signedContract: false,
    contractHolder: 'ERROR',
    unlockedPages: ['help'],
    jayPage: {age: {guess: 0, correct: [48]}, uptime: {guess: 0, correct: ['1 year', 'one year', 'a year']}, operatingSystem: {guess: 0, correct: []}}
});