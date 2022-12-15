<template>
  <form @submit.prevent="editProject">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProjectView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      details: "",
    }
  },
  created() {
    this.initializeProjectData();
  },
  methods: {
    async initializeProjectData() {
      const {data} = await axios.get(`http://localhost:3000/projects/${this.id}`);
      this.title = data.title;
      this.details = data.details;
    },
    async editProject() {
      await axios.patch(`http://localhost:3000/projects/${this.id}`, {
        title: this.title,
        details: this.details,
      });
      this.$router.push({name: "home"});
    },
  },
}
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
  text-align: left;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  resize: none;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
