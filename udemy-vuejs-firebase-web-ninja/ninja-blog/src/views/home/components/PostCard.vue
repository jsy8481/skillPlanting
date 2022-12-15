<template>
  <div>
    <router-link :to="{name: 'DetailPost', params: {id: post.id}}">
      <h2>
        {{ post.title }}
      </h2>
    </router-link>
    <p>
      {{ post.body }}
    </p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
span {
  margin-right: 10px;
}
</style>
