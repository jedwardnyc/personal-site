<template>
  <v-container id="Projects">
    <h1>PROJECTS</h1>
    <div 
      :key="project.id"
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
