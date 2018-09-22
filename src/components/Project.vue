<template>
  <div class='project'>
    <h1 class='project-title'>{{project.name}}</h1>
    <div class='btns'>
      <v-btn
        icon
        target="_blank" 
        class="project-btn" 
        :href=project.github
        v-if="project.github">
        <v-icon color="#e9e9e9" :size=38>fab fa-github</v-icon>
      </v-btn>
      <v-btn
        icon
        target="_blank"
        class="project-btn" 
        :href=project.live
        v-if="project.live">
        <v-icon color="#e9e9e9" :size=32>fas fa-desktop</v-icon>
      </v-btn>
      <v-btn
        icon
        target="_blank" 
        class="project-btn" 
        :href=project.video
        v-if="project.video">
        <v-icon color="#e9e9e9" :size=32>fas fa-video</v-icon>
      </v-btn>
    </div>
    <section class='description' v-html=project.description>
    </section>
    <v-carousel 
      v-if="project.imgs.length && this.hidden === false"
      hide-delimiters
      :cycle=false>
      <v-carousel-item
        v-for="(img,i) in project.imgs"
        :key="i"
        :src=img>
      </v-carousel-item>
    </v-carousel>
    <v-btn
      flat
      outline
      color="#e9e9e9"
      class="toggle-btn" 
      v-on:click='toggleImg'
      v-if="project.imgs.length">
      {{  this.hidden ? "Show Images" : "Hide Images" }}
    </v-btn>
  </div>
</template> 


<script>
  export default {
    props: ['project'],
    data: () => ({
      hidden: true,

    }),
    methods: {
      toggleImg () {
        this.hidden ? this.hidden = false : this.hidden = true
      }
    }
  }
</script>

<style>
  .project {
    background-color: #3A4257;
    margin: 5px;
    border-radius: 15px;
    box-shadow: 0px 15px 35px rgba(50,50,93,.5);
    box-shadow: 0px 5px 15px rgba(0,0,0,.3);
  }
  .project-title {
    font-size: 48px;
    padding-top: 20px;
  }
  .btns {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 150px;
  }
  .project-btn {
    border-radius: 15px;
    width: 50px;
    height: 50px;
  }
  .toggle-btn {
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .description {
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .description-title {
    color: #e9e9e9;
  }
  .description-text {
    color: #91ADC2;
    font-size: 18px;
  }
  .v-carousel {
    margin-bottom: 10px;
  }
</style>
