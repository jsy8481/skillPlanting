<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: currentFilter === 'all'}">View All</button>
    <button @click="updateFilter('completed')" :class="{ active: currentFilter === 'completed'}">Completed</button>
    <button @click="updateFilter('ongoing')" :class="{ active: currentFilter === 'ongoing'}">onGoing</button>
  </nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    currentFilter: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateFilter(key) {
      this.$emit("filterChange", key);
    },
  },
}
</script>

<style scoped>
.filter-nav button{
  background: none;
  border: none;
  color: #bbb;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.filter-nav button.active {
  color: #555;
}
</style>
