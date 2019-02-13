<template>
  <v-card class="my-3" hover>
    <v-card-title primary-title>
      <v-container fluid class="pa-0">
        <h3 class="headline mb-0">{{ title }}</h3>
        <v-layout row class="grey--text pt-2">
          <s-article-caption icon="date_range" :text="createdAt"></s-article-caption>
          <v-divider class="mx-1" vertical></v-divider>
          <s-article-caption icon="today" :text="updatedAt"></s-article-caption>
          <v-divider class="mx-1" vertical></v-divider>
          <s-article-caption icon="folder_open" :text="category.categoryName"></s-article-caption>
        </v-layout>
        <v-layout row class="grey--text pt-1 pb-2">
          <s-article-caption icon="event_note" text="281"></s-article-caption>
          <v-divider class="mx-1" vertical></v-divider>
          <s-article-caption icon="timer" text="2 min"></s-article-caption>
          <v-divider class="mx-1" vertical></v-divider>
          <s-article-caption icon="remove_red_eye" text="281"></s-article-caption>
        </v-layout>
        <div>{{ desc }}</div>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 primary" @click="clickDetailBtn">阅读全文>></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: 'BlogArticle',
    data() {
      return {};
    },
    props: {
      index: {
        type: Number,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      coverImage: {
        type: String
      },
      category: {
        type: Object,
        default: () => {}
      },
      height: {
        type: Number,
        default: 200
      },
      createdAt: {
        type: String,
        default: '-'
      },
      updatedAt: {
        type: String,
        default: '-'
      },
      defaultCoverImg: {
        type: String,
        default:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3445752448,3059857660&fm=26&gp=0.jpg'
      }
    },
    methods: {
      clickDetailBtn() {
        this.$emit('clickDetailBtn', this.index);
      }
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
