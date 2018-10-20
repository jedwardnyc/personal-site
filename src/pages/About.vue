<template>
  <v-container fluid class='about'>
    <img class='headshot' src='../assets/headshot.jpg'/>
    <v-content class='about-text'>
      I am a perfect blend of  artist and engineer. 
      I approach software engineering with experience from my theatre 
      background which gives me an eye for detail
      and the ability to solve problems in a way that others can't. 
      Whether it is acting, designing, coding, or solving puzzles
      in my free time, I attack it with a willingness to learn and find
      new ways to achieve my goals. I live by my favorite quote by Samuel
      Beckett: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."
    </v-content>
  </v-container>
</template>

<style scoped>
  .about {
    margin: 40px auto;
    width: 80%;
    font-size: 18px;
    display: grid;
    grid-auto-flow: column;
    text-shadow: none;
    grid-gap: 20px;
  }
  .headshot {
    grid-row: 1;
    width: 150px;
    height: 220px;
    border-radius: 10px;
    justify-self: center;
  }
  .about-text {
    grid-row: 2;
    text-align: center;
    justify-self: center;
  }

  @media (min-width: 720px){
    .about {
      margin-top: 80px;
      grid-auto-flow: row;
      grid-template-columns: 2fr 10fr;
      grid-template-rows: 1fr;
    }
    .headshot {
      width: 200px;
      height: 300px;
      grid-column: 1;
      grid-row: 1;
    }
    .about-text {
      grid-column: 2;
      grid-row: 1;
      margin-top: 40px;
      margin-left: 20px;
      text-align: left;
      align-self: start;
    }
  }
</style>
