<template>
    <div>
        <p>Reaction time - {{ reactionTime }} ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>

<script>
export default {
    name: "ResultsComponent",
    props: {
        reactionTime: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            rank: "",
        }
    },
    mounted() {
        switch (true) {
            case this.reactionTime < 250:
                this.rank = "엄청난 반응 속도시네요!!"
                break
            case this.reactionTime <= 500:
                this.rank = "무난한 반응 속도시군요 ㅎ.ㅎ";
                break;
            default:
                this.rank = "달팽이처럼 느리시군요 헿..ㅎㅎ";
                break
        }
        console.log(this.rank);
    }
}
</script>

<style scoped>
.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>
