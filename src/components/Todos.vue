<template>
  <div class="todos">
    <div :key="todo.id" v-for="todo in todos">
      <TodoItem :todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem"
export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: {
    todos: [],
  },
}
</script>

<style lang="scss" scoped>
.todos {
  width: 100%;
  padding: 0 2rem;
}
</style>
