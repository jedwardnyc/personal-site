<template>
  <v-card>
    <h1 v-text="project.name"></h1>
  </v-card>
</template>


<script>
  export default {
    props: ['project']
  }
</script>