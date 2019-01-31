<template>
  <v-app>
    <v-toolbar fixed
               color="primary"
               dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/"
                     tag="span"
                     class="header--text">
          Singlemai
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          写文章
          <v-menu bottom left offset-y open-on-hover>
            <v-icon slot="activator" dark>arrow_drop_down</v-icon>
            <v-list dense>
              <v-list-tile
                v-for="(item, i) in createMenu"
                :key="i">
                <v-list-tile replace :to="{ name: 'create-outside-article' }">{{ item.name }}</v-list-tile>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-btn>

          <v-btn flat >
            <router-link to="/outside-article"
                        tag="span"
                        class="header--text">
              外链文章
            </router-link>
          </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      //
      createMenu: [{
        name: '分享链接'
      }]
    };
  }
};
</script>

<style lang="scss" scoped>
.header--text {
  cursor: pointer;
}
</style>
