<template>
  <v-app>
    <v-toolbar app color="accent" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Singlemai</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <ApolloExample/>
    </v-content>
  </v-app>
</template>

<script>
import ApolloExample from "./components/ApolloExample";

export default {
  name: "App",
  components: {
    ApolloExample
  },
  data() {
    return {
      //
    };
  }
};
</script>
