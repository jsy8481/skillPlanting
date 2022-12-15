<template>
  <PostCard v-for="post in posts" :post="post" :key="post.id" />
</template>

<script>
import PostCard from "@/views/home/components/PostCard";
export default {
  name: "PostList",
  components: {PostCard},
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    console.log(props.posts, "check");
  },
}
</script>

<style scoped>

</style>
