<template>
  <div id="app">
    <todo-app
      :tasks="tasks"
      :statuses="statuses"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import TodoApp from '@/components/TodoApp.vue'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      statuses: "todos/getStatuses",
      tasks: "todos/getTasks"
    })
    
  },
  components: {
    TodoApp
  }
}
</script>
