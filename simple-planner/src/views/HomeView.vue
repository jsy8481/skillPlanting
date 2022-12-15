<template>
  <div class="home">
    <FilterNav :currentFilter="currentFilter" @filterChange="filterProjects" />
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id">
        <SingleProject :project="project" @deleted="deleteProject(project.id)" @toggle-complete="(args) => toggleComplete($event, args)" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import SingleProject from "@/components/SingleProject";
import FilterNav from "@/components/FilterNav";

export default {
  name: 'HomeView',
  components: {FilterNav, SingleProject},
  data() {
    return {
      projects: [],
      currentFilter: "all",
    }
  },
  created() {
    axios.get("http://localhost:3000/projects")
        .then((result) => {
          console.log(result)
          this.projects = result.data;
        })
        .catch(err => console.log(err));
  },
  computed: {
    filteredProject() {
      switch (this.currentFilter){
        case "completed":
          return this.projects.filter((project) => project.complete);
        case "ongoing":
          return this.projects.filter((project) => !project.complete);
        default:
          return this.projects;
      }
    }
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter(item => item.id !== id);
    },
    toggleComplete(event, id) {
      const targetIndex = this.projects.findIndex((project) => project.id === id);

      if (targetIndex >= 0) {
        this.projects[targetIndex].complete = !this.projects[targetIndex].complete;
      }
    },
    filterProjects(filterKey) {
      this.currentFilter = filterKey;
    },
  },
}
</script>
