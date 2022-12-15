<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import axios from "axios";
import PostList from "@/views/home/components/PostList";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";

export default {
  name: 'HomeView',
  components: {
    Spinner,
    PostList
  },
  setup() {
    const {posts, error, load} = getPosts();
    load();

    return {
      posts,
      error,
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
}
</script>
