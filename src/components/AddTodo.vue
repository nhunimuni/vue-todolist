<template>
  <form @submit="addTodo">
    <md-field>
      <label for="first-name">Add Todo ...</label>
      <md-input v-model="title" type="text" name="title" />
    </md-field>
    <md-card-actions>
      <md-button type="submit" class="md-accent">ADD</md-button>
    </md-card-actions>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault()
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        isCompleted: false,
      }
      this.$emit("add-todo", newTodo)

      this.title = ""
    },
  },
}
</script>

<style>
form {
  display: flex;
  width: 70%;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
  padding: 5px;
}
</style>
