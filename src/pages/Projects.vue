<template>
  <v-container id="projects">
    <div 
      class="projects-container"
      :key="project.name"
      v-for="project in projects"
    >
      <project :project=project />
    </div>
    
  </v-container>
</template>

<script>
  import projects from '../helpers/projects.json'
  export default {
    data: () => ({
      projects: projects
    })
  }
</script>

<style>
  #projects {
    display: grid;
  }
  .projects-title {
    grid-column: 1 / -1;
    margin-bottom: 1em;
  }
</style>
