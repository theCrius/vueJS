<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <router-link to="/">Home</router-link> |
          <router-view/>
        </v-container>
      </v-content>
      <v-footer height="auto" class="grey darken-3">
        <v-layout row wrap justify-center>
          <v-btn color="white" flat v-for="link in links" :key="link">
            {{ link }}
          </v-btn>
          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;2018 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
  })
};
</script>

<style lang="scss">

</style>
