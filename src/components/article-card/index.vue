<template>
  <v-card class="my-3"
          disabled
          hover>
    <v-img class="white--text"
           :height="`${height}px`"
           :src="coverImage || defaultCoverImg">
    </v-img>
    <v-card-title>
      <div class="headline">{{ title }}</div>
      <p>{{ desc }}</p>
      <div>
        <v-chip v-for="item in tags" :key="item.id"
                color="primary" text-color="white">{{ item.tagName }}</v-chip>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn icon>
        <v-icon medium
                v-if="hasRead">visibility</v-icon>
      </v-btn>
      <v-btn icon @click="clickStartBtn">
        <v-icon medium :color="stars ? 'grey' : 'yellow'">start</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat
             class="blue--text"
             @click="clickDetailBtn">学 习</v-btn>
    </v-card-actions>
  </v-card>
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
