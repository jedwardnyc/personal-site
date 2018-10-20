<template>
  <header>
    <v-card
      color="#ADACB5"
      flat
    >

      <v-toolbar color="#ADACB5">
        <router-link
          class="logo-link"
          :key="'logo'"
          :to="'/'">
          <img class="logo" type="svg" alt="logo" src="../assets/logo.svg" />
        </router-link>
        <div id="web" class="links">
          <router-link
            active-class="active-link"
            class="nav-link" 
            v-for="route in this.$router.options.routes"
            v-if="route.name !== 'Home'"
            :key="route.id"
            :to="route.path">
          {{ route.name }}
          </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-menu id="mobile" color="#ADACB5" offset-y transition="slide-y-transition">
          <v-toolbar-title slot="activator">
            {{this.$route.name}}
            <v-icon>arrow_drop_down</v-icon>
          </v-toolbar-title>

          <v-list>
            <v-list-tile
              active-class="default-class active-link"
              color="#101218"
              v-for="route in this.$router.options.routes"
              v-if="route.name !== 'Home'"
              :key="route.id"
              :to="route.path"
              @click="{}"
            >
              <v-list-tile-title v-text="route.name"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-btn 
          icon
          target="_blank"
          href="https://github.com/jedwardnyc">
          <v-icon color="#101218">fab fa-github</v-icon>
        </v-btn>
        <v-btn 
          icon
          target="_blank"
          href="https://www.linkedin.com/in/jacobrico/">
          <v-icon color="#101218">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn 
          icon
          target="_blank"
          href="https://medium.com/@jacobedwardrico">
          <v-icon color="#101218">fab fa-medium</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </header>
</template>

<style>
  #web {
    display: none;
  }
  #mobile {
    display: inherit;
    text-align: center;
    margin: 0 auto;
  }
  .nav {
    display: grid;
    grid-template-columns: 1fr 9fr;
    background-color: #ADACB5;
    color: #e9e9e9;
    align-items: center;
    padding: 0 2em;
    font-weight: 600;
    box-shadow: 0px 15px 35px rgba(50,50,93,.5);
    box-shadow: 0px 5px 15px rgba(0,0,0,.3);
  }
  .links {
    font-size: 16px;
    margin-left: 20px;
  }
  .social {
    grid-column: -1;
    justify-items: end;
  }
  .active-link {
    font-weight: 600;
  }
  .nav-link {
    text-decoration: none;
    color: #101218;
    justify-self: space-around;
    margin: 0 10px;
    font-weight: 400;
  }
  .nav-link:hover {
    text-decoration: none;
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

  @media (min-width: 720px) {
    #mobile {
      display: none;
    }
    #web {
      display: inherit;
    }
    .nav-link:hover {
      text-decoration: underline;
    }
    .active-link {
      font-weight: 600;
    }
  }
</style>
