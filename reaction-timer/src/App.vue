<template>
    <h1>빵이가 만든 게임 훗..!</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <BlockComponent v-if="isPlaying" @show-result="showResult" :delay="delay"/>
    <ResultsComponent v-if="isShowResult" :reaction-time="reactionTime"/>
</template>

<script>
import BlockComponent from "@/components/Block";
import ResultsComponent from "@/components/Results";
export default {
    name: 'App',
    components: {ResultsComponent, BlockComponent},
    data() {
        return {
            isPlaying: false,
            delay: null,
            reactionTime: null,
            isShowResult: false,
        }
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000;
            this.isPlaying = true;
            this.isShowResult = false;
        },
        showResult(reactionTime) {
            this.reactionTime = reactionTime;
            this.isPlaying = false;
            this.isShowResult = true;
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
}
button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}
</style>
