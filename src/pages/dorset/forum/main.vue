<script setup lang="ts">
import { ref } from 'vue';
import YMDT from '../../../components/YMDT.vue';


const activeBoard = ref('info');
const countDown = ref(120);

</script>

<template>
    <section class="forum">
        <header>
        <h1>glyph</h1>
        <hr>
        <nav>
            [<button>info/</button>]
        </nav>
        <hr>
        <h2>/info/ - news & updates</h2>
        <ol class="posting">
            <li><label>User</label><input></li>
            <li><label>Password</label><input></li>
            <li><label>Subject</label><input></li>
            <li><label>Comment</label><textarea></textarea></li>
            <aside class="blocked"><em>VOICE</em><p>SEALED BY THE FLY LORD'S WILL</p></aside>
        </ol>
        </header>
        <main v-if="activeBoard == 'gen'">
            <ol>
                <li>
                    <h3>Intrazone Megathread</h3>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>Thread for... whatever this thing is!</p>
                    <p>To be honest, I'm not sure if this is a joke on Jay's part or what. Knowing him, and the way he was talking about it... I think it might be real? But I'm not sure.</p>
                    <p>In any case... Why not collect interesting things we find? So far, I haven't had any luck searching...</p>
                </li>
                <li>
                    <h4 class="blood">c@uterize <YMDT /></h4>
                    <p>oooh! a game?</p>
                    <p>must be a game, right?</p>
                    <p>did anyone else notice...? there are way fewer colors in the time capsule... even my browser is going haywire! what gives?</p>
                </li>
                <li>
                    <h4 class="jay">curmudgeonlycorvid <YMDT /></h4>
                    <p>Well, from the research on the past, the further you go back, the fewer colors they had.</p>
                    <p>21st century displays couldn't handle the full-color richness that our screens have.</p>
                    <p>If you go back even further than that, the only colors they had were black and white!</p>
                </li>
                <li>
                    <h4 class="blood">c@uterize <YMDT /></h4>
                    <p>wow... jay knows so much!!</p>
                    <p>anyway, did everyone find?</p>
                    <p>i found something! but i'm not saying how...</p>
                </li>
                <li>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>I finally did get something!</p>
                    <p>It wasn't that hard after all. The time capsule was a big clue.</p>
                    <p>If anyone needs help, try searching for <span class="spoiler">the year it was closed.</span></p>
                </li>
            </ol>
        </main>
        <main v-if="activeBoard == 'info'">
            <ol>
                <li>
                    <h3>One Year!</h3>
                    <h4 class="jay">curmudgeonlycorvid <YMDT /></h4>
                    <p>Greetings, users new and old!</p>
                    <p>Today is a special day for me, and for this little online hang-out-space. Today marks a whole year that I've been maintaining, curating, and cultivating Dorset. (It's also my real life birthday, too!) When I started this project, I thought it'd just be something to pass the time, to see what it was like messing around with computers in the old days. I didn't think so many of you would be joining in on this adventure with me.</p>
                    <p>It wouldn't be a birthday without a party, right? Well... I have something special planned for everyone.</p>
                    <p>As you know, recreating the materials necessary for a project like Dorset involved a lot of digging. Information Control had lots of backups of old software, but it was, for the most part, an unsorted mess - truckloads of drives, most barely working, hastily filled with the most random bits of crap anyone could get their hands on.</p>
                    <p>Of course, at the very start, I didn't even know what to look *for*. I had to learn how to look, so to speak. I slowly pieced together the things I could use to make a worthy facsimile of that era - with Information Control filling the gaps, when I hit a wall.</p>
                    <p>But still, eventually, something or other would break. I'd lose terminal access, or the boards would start missing posts, and I'd have to go back through the archives, looking for a solution.</p>
                    <p>In the course of that long, continuous search... I *found* something. Something interesting.</p>
                    <aside class="message">
                        <p>$ cat WARNING.TXT</p>
                        <p>></p>
                        <p class="center">░░░▒▒▒▓▓▓ 2012 ▓▓▓▒▒▒░░░</p>
                        <p>This place is a message... and part of a system of messages... pay attention to it!</p>
                        <p>Sending this message was important to us. We considered ourselves to be a powerful culture.</p>
                        <p> This place is not a place of honor... no highly esteemed deed is commemorated here... nothing valued is here.</p>
                        <p> What is here was dangerous and repulsive to us. This message is a warning about danger.</p>
                        <p>The danger is still present, in your time, as it was in ours.</p>
                        <p>The danger is to the mind, and it can kill.</p>
                        <p>The danger takes the form of pieces of information.</p>
                        <p>The danger is unleashed only if you substantially investigate this place digitally.</p>
                        <p>This place is best shunned and left unarchived.</p>
                        <p class="center"><RouterLink to="/intrazone/main">░░░▒▒▒▓▓▓ ENTER ▓▓▓▒▒▒░░░</RouterLink></p>
                    </aside>
                    <p>Surreal, right? A time capsule. And not only that... a time capsule meant specifically for today.</p>
                    <p>Even I don't know what's in it. But if it's authentic... this could be a goldmine. I've been giddy just thinking about it.</p>
                    <p>Of course... it could also be a whole lot of nothing, too. But that's what I thought to myself a year ago, and look at me now!</p>
                    <p>So today, I'm playing the optimist. I invite all of you to join me in uncovering just what the heck this thing is.</p>
                </li>
                <li>
                    <h4>Anonymous <YMDT /></h4>
                    <p>FIRST!!!</p>
                </li>
                <li>
                    <h4>Anonymous <YMDT /></h4>
                    <p>Doubt it's anything good. I mean, we have opened some of these before - non digital ones. And they're almost always just filled with totally random crap. Doesn't tell you very much about anything.</p>
                    <p>Still though, that one is OLD. I'll keep my fingers crossed.</p>
                </li>
                <li>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>Happy birthday! PSST - you forgot to update your age on your homepage :p</p>
                </li>
                <li>
                    <h4>Anonymous <YMDT /></h4>
                    <p>Is this a bit? Puzzle hunt or something?</p>
                    <p>That warning... I've seen it before, somewhere. In some kind of 21st century history archive...</p>
                </li>
                <li>
                    <h4>Anonymous <YMDT /></h4>
                    <p>Yeah, I've seen it before too. Not based on anything real, basically fictional.</p>
                    <p>They were stupid back then, but not enough to irradiate their own planet.</p>
                </li>
            </ol>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    .forum {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'dm mono';
        background-color: $pink;
        background-image: url('/images/brick.webp');
        padding-bottom: 2rem;
        header {
            width: 100%;
            h1 {
                font-family: 'vga';
                font-size: 128px;
                margin-top: 1rem;
                text-align: center;
            }
            h2 {
                font-size: 1.5rem;
                text-align: center;
            }
            nav {
                text-align: center;
                button {
                    all: unset;
                }
                width: 100%;
            }
            hr {
                border: none;
                border-bottom: 2px solid $red;
                width: 100%;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            .posting {
                background-color: $white;
                width: 60%;
                padding: 0.5rem;
                margin-bottom: 1rem;
                display: flex;
                flex-direction: column;
                border: 2px solid $white;
                border-right: 2px solid $gray;
                border-bottom: 2px solid $darkgray;
                input {
                    pointer-events: none;
                }
                li {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: space-between;
                }
                textarea {
                    resize: none;
                    height: 6rem;
                    width: 100%;
                }
                position: relative;
                .blocked {
                    opacity: 0%;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    position: absolute;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 0.5rem;
                    background-color: black;
                    color: red;
                    text-shadow: 5px 5px 5px darkred;
                    left: 0;
                    top: 0;
                    transition: all 0.5s;
                    background-image: url('/images/baal.webp');
                    background-repeat: no-repeat;
                    background-position: center;
                    em {
                        text-decoration: line-through;
                    }
                }
                &:hover {
                    input,
                    label,
                    textarea {
                        transition: all 0.5s;
                        opacity: 0%;
                    }
                    border: 2px solid black;
                    .blocked {
                        transition: all 0.5s;
                        opacity: 100%;
                    }
                }
            }
        }
        main {
            background-color: $white;
            width: 80%;
            padding: 1rem;
            border: 2px solid $lightgray;
            border-right: 2px solid $gray;
            border-bottom: 2px solid $gray;
        }
        ol {
            gap: 0.5rem;
            display: flex;
            flex-direction: column;
            h3 {
                color: $darkgreen;
                font-weight: bold;
                font-size: 1.5rem;
            }
            h4 {
                color: $purple;
                font-weight: bold;
                position: relative;
            }
            h4.jay {
               color: $darkblue;
            }
            h4.daisy {
                color: $yellow;
            }
            time {
             color: $black;
            }
            li {
                line-height: 1.2rem;
                p {
                    font-family: 'nunito';
                    margin-bottom: 0.5rem;
                }
                .message {
                    background-color: $black;
                    color: $white;
                    padding: 0.5rem;
                    p {
                        font-family: 'vga';
                        font-size: 32px;
                    }
                }
            }
        }
    }
</style>