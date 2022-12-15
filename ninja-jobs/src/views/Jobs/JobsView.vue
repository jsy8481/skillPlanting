<template>
    <h1>Jobs</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: {id : job.id}}">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "JobsView",
    data() {
        return {
            jobs: [],
        }
    },
    created() {
      axios.get("http://localhost:3000/jobs").then((result) => {
          this.jobs = result.data;
      }).catch((e) => console.log(e));
    },
}
</script>

<style scoped>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h2:hover {
    background: #ddd;
}
.job a {
    text-decoration: none;
}
</style>
