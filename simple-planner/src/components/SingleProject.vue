<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click.prevent="toggleDetail">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{name: 'EditProject', params: {id: project.id}}">
          <span class="material-icons">
            edit
          </span>
        </router-link>
        <span @click.prevent="deleteProject" class="material-icons">
        delete
      </span>
        <span @click.prevent="toogleComplete" class="material-icons" :class="{tick: project.complete}">
        done
      </span>
      </div>
    </div>
    <div v-show="isShowDetail">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  name: "SingleProject",
  data() {
    return {
      isShowDetail: false,
      uri: `http://localhost:3000/projects/${this.project.id}`,
    }
  },
  methods: {
    toggleDetail() {
      this.isShowDetail = !this.isShowDetail;
    },
    async deleteProject() {
      await axios.delete(this.uri);
      this.$emit("deleted");
    },
    async toogleComplete() {
      try {
        await axios.patch(this.uri, {complete: !this.project.complete})
        this.$emit("toggle-complete", this.project.id);
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.tick {
  color: #00ce89;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons:hover {
  color: #777;
}
</style>
