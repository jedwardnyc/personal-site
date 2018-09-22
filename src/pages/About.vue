<template>
  <v-container class='about'>
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
    margin: 80px auto;
    width: 80%;
    font-size: 18px;
    display: grid;
    grid-template-columns: 2fr 10fr;
    text-shadow: none;
  }
  .headshot {
    grid-column: 1;
    width: 150px;
    height: 220px;
    border-radius: 10px;
  }
  .about-text {
    grid-column: 2;
    text-align: left;
    margin-left: 30px;
    align-self: center;
  }
</style>
