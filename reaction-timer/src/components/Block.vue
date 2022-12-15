<template>
    <div @click="showResult" class="block" v-if="showBlock">
        click me
    </div>
</template>

<script>
export default {
    name: "BlockComponent",
    props: {
        delay: {
            type: Number,
            required: true,
        },
    },
    data() {
      return {
          showBlock: false,
          showTime: null,
      }
    },
    mounted() {
        console.log(this.delay)
        setTimeout(() => {
            this.showBlock = true;
            this.showTime = Date.now();
        }, this.delay)
    },
    methods: {
        showResult() {
            this.$emit("show-result", Date.now() - this.showTime);
        },
    },
}
</script>

<style scoped>
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>
