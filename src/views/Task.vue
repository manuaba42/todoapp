<template>
  <div >
      <h1>{{ $route.params.task }}</h1>   
      <div id="nav">
          <router-link :to="{ name: 'Home'}">Home</router-link>
      </div>
      <router-view />
  </div>
</template>

<script>
export default {
    computed: {

    }

}
</script>

<style>

</style>