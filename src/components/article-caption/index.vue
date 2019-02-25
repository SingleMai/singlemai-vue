<template>
  <ul class="article-caption__block" :class="{ 's-display-flex__justify-center': center }">
    <li class="article-caption__item"
        v-for="(item, index) in data"
        :key="index">
      <a-icon :type="item.icon" />
      <span class="s-ml-3">{{ item.text }}</span>
      <a-divider v-if="index !== data.length - 1" type="vertical"/>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'ArticleCaption',
    props: {
      data: {
        type: Array,
        required: true
      },
      center: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang='less' scoped='' type='text/css'>
.article-caption__block {
  display: flex;
  flex-wrap: wrap;
}
</style>
