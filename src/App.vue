<template>
  <div id="app">
    <Todos :todos="todos" />
  </div>
</template>

<script>
import Todos from "./components/Todos"
export default {
  name: "App",
  components: { Todos },
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
      ],
    }
  },
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
}
</style>
