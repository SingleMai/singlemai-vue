<template>
  <a-layout theme="light">
    <a-layout-header class="s-display-flex s-display-flex__justify-bt home-index__header">
      <div>
        <h1 class="s-headline s-m0">Singlemai</h1>
      </div>
      <a-menu mode="horizontal" class="home-header__menu">
        <a-menu-item key="1">
          <router-link :to="{ name: 'blogArticle' }">博客文章</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{ name: 'OutsideArticle' }">外链文章</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="home-content__block">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>
<script>
  export default {
    name: 'HomeIndex',
    data() {
      return {};
    },
  };
</script>

<style lang='less' scoped='' type='text/css'>
  .home-index__header {
    position: fixed;
    z-index: 1;
    width: 100%;
    background: @white;
    border-bottom: @border-width-base @border-style-base @border-color-base;
  }
  .home-header__menu {
    line-height: @layout-header-height - 1px;
  }
  .home-content__block {
    margin-top: @layout-header-height;
    padding: 0 0;
    min-height: calc(100vh - @layout-header-height);
    box-sizing: border-box;
    // background: @disabled-color-dark;
  }
</style>
