<template>
  <v-card class="my-3"
          disabled
          hover>
    <v-img class="white--text"
           :height="`${height}px`"
           :src="coverImage || defaultCoverImg">
      <v-container fill-height
                   fluid>
        <v-layout>
          <v-flex xs12
                  align-end
                  d-flex>
            <span class="headline">{{ title }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-text>
      {{ desc }}
    </v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon medium
                v-if="hasRead">visibility</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat
             class="blue--text"
             @click="clickDetailBtn">Learn</v-btn>
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
    }
  }
};
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
