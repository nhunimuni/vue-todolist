<template>
  <div id="app">
    <md-toolbar class="md-primary" md-elevation="0">
      <span class="md-headline">Todo List</span>
    </md-toolbar>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos :todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: { Todos, AddTodo },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo Item 1",
          isCompleted: false,
        },
        {
          id: 2,
          title: "Todo Item 2",
          isCompleted: true,
        },
        {
          id: 3,
          title: "Todo Item 3",
          isCompleted: false,
        },
      ],
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo]
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Arial, Helvetica, sans-serif;
  line-height: 1.4;
  width: 100%;
}

#app {
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span {
    width: 100%;
    text-align: center;
  }
}
</style>
