<script setup lang="ts">
import { ref } from 'vue';
import YMDT from '../../../components/YMDT.vue';
import { songs } from '../../../state/songs.ts';
import { progress } from '../../../state/progress.ts';


const activeBoard = ref('info');
const countDown = ref(120);

songs.changePlaying('1500g');

progress.unlockedPages.push('glyph');

</script>

<template>
    <section class="forum">
        <header>
        <h1>glyph</h1>
        <hr>
        <nav>
            [<button @click="activeBoard = 'info'" :class="{active: activeBoard == 'info'}">info</button >/<button @click="activeBoard = 'gen'" :class="{active: activeBoard == 'gen'}">gen</button>]
        </nav>
        <hr>
        <h2 v-if="activeBoard == 'info'">#info - news & updates</h2>
        <h2 v-else-if="activeBoard == 'gen'">#gen - general</h2>
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
                    <p>To be honest, I'm not sure if this is a joke or puzzle made by Jay, or what. Knowing him, and the way he was talking about it... I think it might be real? But I'm not sure.</p>
                    <p>In any case... Why not collect interesting things we find? So far, I haven't had any luck searching...</p>
                </li>
                <li>
                    <h4 class="blood">c@uterize <YMDT /></h4>
                    <p>oooh! a game?</p>
                    <p>must be a game, right?</p>
                    <p>did anyone else notice...? in this world, there are way fewer colors... even my browser is going haywire! what gives?</p>
                </li>
                <li>
                    <h4 class="jay">curmudgeonlycorvid <YMDT /></h4>
                    <p>I can assure everyone that this is real.</p>
                    <p>As for the colors... from my research on the past, it seems the further you go back, the fewer colors they had.</p>
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
                    <p>If anyone needs help, try searching for <span class="spoiler">the year this "time capsule" seems to be dated.</span></p>
                </li>
                <li>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>I'm stuck again, though.</p>
                    <p>I found what appears to be some kind of title page, but I can't get much farther.</p>
                    <p>There seems to be... some kind of lock blocking the link?</p>
                </li>
                <li>
                    <h4 class="blood">c@uterize <YMDT /></h4>
                    <p>huh?</p>
                    <p>that's easy :p</p>
                    <p>daisy really doesn't know? still stuck inside the box...</p>
                </li>
            </ol>
        </main>
        <main v-if="activeBoard == 'info'">
            <ol>
                <li>
                    <h3>One Year!</h3>
                    <h4 class="jay">curmudgeonlycorvid <YMDT /></h4>
                    <p>Greetings, everybody!</p>
                    <p>This is a special day for both me and for this little online-space. Today marks a whole year that I've been maintaining, curating, and cultivating Dorset. (It's also my real life birthday, too!) When I started this project, I thought it'd just be something to pass the time, to see what it was like messing around with computers and distributed systems in the old days. I didn't think so many of you would be joining in on this adventure with me.</p>
                    <p>It wouldn't be a birthday without a party, right? Well... I have something special planned for everyone.</p>
                    <p>As you know, recreating the materials necessary for a project like Dorset involved a lot of digging. Information Control had lots of backups of old software, but it was, for the most part, an unsorted mess - truckloads of drives, most barely working, hastily filled with the most random bits of crap anyone could get their hands on.</p>
                    <p>Of course, at the very start, I didn't even know what to look *for*. I had to learn how to look, so to speak. I slowly pieced together the things I could use to make a worthy facsimile of that era - with Information Control filling the gaps, when I hit a wall.</p>
                    <p>But still, eventually, something or other would break. I'd lose terminal access, or the boards would start missing posts, and I'd have to go back through the archives, looking for a solution.</p>
                    <p>In the course of that long, continuous search... I *found* something. Something interesting.</p>
                    <p>Something that I want to share with you all.</p>
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
                        <p class="center"><RouterLink class="enter" @click="songs.playClick" to="/intrazone/main">░░░▒▒▒▓▓▓ ENTER ▓▓▓▒▒▒░░░</RouterLink></p>
                    </aside>
                    <p>Surreal, right? Some kind of oldweb archive. I've found plenty of these, of course, but none with a message... like that.</p>
                    <p>Even I don't know what's in it. But if it's authentic... this could be a goldmine. 2012! That's... really old. I've been getting giddy just thinking about it.</p>
                    <p>Of course... it could also be a whole lot of nothing, too. But that's what I thought to myself a year ago, and look at me now!</p>
                    <p>So today, I'm playing the optimist. I invite all of you to join me in uncovering just what the heck this thing is.</p>
                </li>
                <li>
                    <h4>Unknown User <YMDT /></h4>
                    <p>FIRST!!!</p>
                </li>
                <li>
                    <h4>Unknown User <YMDT /></h4>
                    <p>Doubt it's anything good. I mean, we have opened some of these before - non digital ones. And they're almost always just filled with totally random crap. Doesn't tell you very much about anything. Entire concept of a time capsule is basically stupid.</p>
                    <p>Still though, that sure is old. I'll keep my fingers crossed something interesting pops up.</p>
                </li>
                <li>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>Happy birthday darling Jay! PSST - you forgot to update your age on your homepage :p</p>
                </li>
                <li>
                    <h4 class="vain">vainglory <YMDT /></h4>
                    <p>Is this a bit? Puzzle hunt or something?</p>
                    <p>That warning... I've seen it before, somewhere. In some kind of 21st century history archive... It's a reference to something, I'm sure.</p>
                </li>
                <li>
                    <h4>Unknown User <YMDT /></h4>
                     <p>Yeah, I've seen it before too. Something about nuclear waste? A science fiction thing, I'm pretty sure.</p>
                    <p>They were stupid back then, but not enough to irradiate their own planet.</p>
                </li>
                <li>
                    <h4 class="daisy">daisydear <YMDT /></h4>
                    <p>I'm starting a new thread in #gen for sharing specific findings.</p>
                    <p>Some people might want to mess around by themselves first, before looking at anything anyone else finds.</p>
                </li>
            </ol>
        </main>
    </section>
</template>

<style lang="scss" scoped>
.enter {
    color: $red;
    animation: glow 2s linear 0s infinite alternate;
}
    .forum {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'dm mono';
        background-color: $pink;
        background-image: url('/images/brick.webp');
        padding-bottom: 2rem;
        .spoiler {
            background-color: $gray;
            color: $gray;
            &:hover {
                color: $white;
            }
        }
        header {
            width: 100%;
            .active {
                font-weight: bold;
                text-decoration: underline;
            }
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
                font-size: 1.5rem;
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
            h4.blood {
                color: $red;
            }
            h4.vain {
                color: $green;
            }
            time {
             color: $black;
             margin-left: 0.5rem;
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