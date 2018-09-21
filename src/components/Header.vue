<template>
  <header class="nav">
    <router-link
      class="logo-link"
      :key="'logo'"
      :to="'/'"
    >
      <img class="logo" type="svg" alt="logo" src="../assets/logo.svg" />
    </router-link>
    <div class="links">
      <router-link
        class="nav-link" 
        v-for="route in this.$router.options.routes"
        v-if="route.name !== 'Home'"
        :key="route.id"
        :to="route.path"
      >
      {{ route.name }}
      </router-link>
    </div>
    <div class="social">
      <v-btn icon href="https://github.com/jedwardnyc"><v-icon>fab fa-github</v-icon></v-btn>
      <v-btn icon href="https://www.linkedin.com/in/jacobrico/"><v-icon>fab fa-linkedin</v-icon></v-btn>
      <v-btn icon href="https://medium.com/@jacobedwardrico"><v-icon>fab fa-medium</v-icon></v-btn>
    </div>
  </header>
</template>

<style>
  .nav {
    display: grid;
    grid-template-columns: 1fr 9fr;
    background-color: #ADACB5;
    color: #e9e9e9;
    align-items: center;
    padding: 0 2em;
    font-weight: 600;
  }
  .links {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    grid-column: 2;
    justify-self: start;
  }
  .social {
    grid-column: -1;
    justify-items: end;
  }
  .nav-link {
    align-self: center;
    text-decoration: none;
  }
  .nav-link:hover {
    text-decoration: underline;
  }
  .logo {
    width: 72px;
    height: 72px;
    align-self: center;
  }
  .logo-link {
    align-self: center;
    width: 72px;
    height: 72px;
    padding: 0.5em 0;
  }
  .v-btn {
    margin: 0;
  }
</style>
