<template>
    <div v-if="job">

    </div>
    <h1>{{ job.title }}</h1>
    <p>{{ job.id }}</p>
    <p>{{ job.detail }}</p>
</template>

<script>
import axios from "axios";

export default {
    name: "JobDetails",
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            job: {},
        }
    },
    created() {
      axios.get(`http://localhost:3000/jobs/${this.id}`).then(result => {
          this.job = result.data;
      })
    },
}
</script>

<style scoped>

</style>
