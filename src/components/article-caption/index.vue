<template>
  <div class="article-caption">
    <v-icon class="mr-1" small>{{ icon }}</v-icon>
    <p class="ma-0 caption">{{ text }}</p>
  </div>
</template>
<script>
  export default {
    name: 'ArticleCaption',
    props: {
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
.article-caption {
  display: flex;
  align-content: center;
}
</style>
