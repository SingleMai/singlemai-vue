<template>
  <v-container fluid>
    <strong class="title">分享外链</strong>
    <form>
      <v-layout row>
        <v-flex grow pa-1>
          <v-text-field v-validate="'required|max:10'"
                        v-model="formData.title"
                        :counter="10"
                        label="文章标题"
                        data-vv-name="title"
                        required
          ></v-text-field>
          <v-text-field v-validate="'required|max:10'"
                        v-model="formData.path"
                        :counter="10"
                        label="外链地址"
                        data-vv-name="path"
                        required
          ></v-text-field>
          <v-textarea v-model="formData.desc"
                      label="描述"
                      rows="4"
          ></v-textarea>

          <v-select :items="allTags"
                    item-text="tagName"
                    item-value="id"
                    v-model="formData.tags"
                    label="Select"
                    placeholder="为文章打上适合的标签"
                    deletable-chips
                    multiple
                    chips
                    persistent-hint>
            <v-list-tile slot="append-item" ripple @click="createArticleTag">
              <v-list-tile-action>
                <v-icon>add</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>添加文章标签</v-list-tile-title>
            </v-list-tile>
          </v-select>
        </v-flex>
        <v-flex shrink pa-1>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';

  export default {
    name: 'EditOutsideArticle',
    data() {
      return {
        formData: {},
        allTags: [],
      };
    },
    apollo: {
      allTags: {
        query: gql`
          query {
            findAllArticleTag {
              id
              tagName
            }
          }
        `,
        update(data) {
          return data.findAllArticleTag;
        }
      }
    },
    methods: {
      createArticleTag() {
        console.log(1);
      }
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
