<template>
  <AppHeader />
  <MemoApp />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import MemoApp from "@/components/MemoApp";

export default {
  name: 'App',
  components: {
    MemoApp,
    AppHeader,
  }
}
</script>

<style>
@import "./styles/reset.css";

#app {
  width: 560px;
  margin: 0 auto;
}
</style>
