<template>
  <a-card :style="{ width: cardWidth }" hoverable>
    <img height="360px" :src="coverImage || defaultCoverImg"
         alt="文章题图" slot="cover">
    <a-card-meta :title="title">
      <template slot="description">
        <p>{{ desc }}</p>
        <s-tag-line-list :data="tags"></s-tag-line-list>
      </template>
    </a-card-meta>
    <div class="s-display-flex s-display-flex__justify-end">
      <a-button-group>
        <a-button type="primary" @click="clickStartBtn">
          <a-icon :theme="stars ? 'outlined' : 'filled'" type="star"/>
        </a-button>
        <a-button type="primary" icon="paper-clip" @click="clickDetailBtn">跳转学习</a-button>
      </a-button-group>
    </div>
  </a-card>
</template>
<script>
export default {
  name: 'ArticleCard',
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
    tags: {
      type: Array,
      default: () => []
    },
    stars: {
      type: Boolean,
      default: false
    },
    hasRead: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 200
    },
    defaultCoverImg: {
      type: String,
      default:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3445752448,3059857660&fm=26&gp=0.jpg'
    },
    cardWidth: {
      type: String,
      default: '650px'
    }
  },
  data() {
    return {};
  },
  methods: {
    clickDetailBtn() {
      this.$emit('clickDetailBtn', {
        id: this.id,
        index: this.index
      });
    },
    clickStartBtn() {
      this.$emit('clickStartBtn', {
        id: this.id,
        index: this.index
      })
    }
  }
};
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
