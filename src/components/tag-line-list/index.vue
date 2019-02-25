<template>
  <ul class="tag-line-list__block">
    <li class="tag-line-list__item s-link-hover"
        v-for="(item, index) in data"
        :key="index">
      # {{ item[nameKey] }}
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'TagLineList',
    props: {
      data: {
        type: Array,
        required: true
      },
      nameKey: {
        type: String,
        default: 'tagName'
      }
    },
    data() {
      return {};
    },
  };
</script>

<style lang='less' scoped='' type='text/css'>
.tag-line-list__block {
  display: flex;
  flex-wrap: wrap;
  .tag-line-list__item {
    margin-right: 10px;
  }
}
</style>
