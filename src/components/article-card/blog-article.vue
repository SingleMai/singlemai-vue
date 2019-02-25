<template>
  <a-card :style="{ width: cardWidth }" hoverable>
    <h3 class="s-title">{{ title }}</h3>
    <s-article-caption :data="captionDataTop"></s-article-caption>
    <s-article-caption :data="captionDatadDown"></s-article-caption>
    <p class="s-my-4">{{ desc }}</p>
    <div class="s-display-flex s-display-flex__justify-end">
      <a-button type="primary" @click="clickDetailBtn">
        查看全文
        <a-icon type="right" />
      </a-button>
    </div>
  </a-card>
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
      },
      cardWidth: {
        type: String,
        default: '1200px'
      }
    },
    data() {
      return {
        captionDataTop: [
          { icon: 'calendar', text: this.createdAt },
          { icon: 'schedule', text: this.updatedAt },
          { icon: 'folder', text: this.category.categoryName },
        ],
        captionDatadDown: [
          { icon: 'fle-word', text: 281 },
          { icon: 'clock-circle', text: 281 },
          { icon: 'eye', text: 281 },
        ]
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
