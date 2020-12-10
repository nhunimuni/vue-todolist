<template>
  <div class="todo-item">
    <md-checkbox
      :class="{ 'todo-item--isCompleted': todo.isCompleted }"
      v-on:change="markComplete"
      v-model="this.todo.isCompleted"
      >{{ todo.title }}</md-checkbox
    >
    <md-button class="md-icon-button del" @click="$emit('del-todo', todo.id)">
      <md-icon>clear</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {},
  },
  methods: {
    markComplete: function() {
      this.todo.isCompleted = !this.todo.isCompleted
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  margin-bottom: 2px;
  gap: 0.5rem;
  align-items: center;
  padding: 0 0.3rem 0 1rem;
  background-color: rgb(235, 235, 235);
  justify-content: space-between;
  width: 100%;

  &--isCompleted {
    text-decoration: line-through;
  }
}
</style>
