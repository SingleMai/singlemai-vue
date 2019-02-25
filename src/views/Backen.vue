<template>
  <a-layout class="backen-home__block">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark"
              mode="inline"
              :defaultSelectedKeys="['1']"
              @click="routeChange">
        <a-menu-item v-for="(item, index) in routeData"
                     :key="index">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    name: 'BackenHome',
    data() {
      return {
        collapsed: false,
        routeData: [
          { icon: 'user', title: '用户管理', pathName: '' },
          { icon: 'video-camera', title: '博客文章管理', pathName: 'BlogArticleEdit' },
          { icon: 'upload', title: '外链文章管理', pathName: '' }
        ]
      };
    },
    methods: {
      routeChange({ key, keyPath }) {
        const routeMeta = this.routeData[key];
        this.$router.push({ name: routeMeta.pathName });
      }
    }
  };
</script>

<style lang='less' scoped='' type='text/css'>
.backen-home__block {
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
}
</style>
