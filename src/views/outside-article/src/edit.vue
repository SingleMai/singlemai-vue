<template>
  <v-container fluid>
    <v-alert :value="alert.isShow" :type="alert.type">
      {{ alert.msg }}
    </v-alert>
    <strong class="title">分享外链</strong>
    <v-form ref="form">
      <v-layout row>
        <v-flex xs8>
          <v-text-field v-model="formData.title"
                        :rules="rules.title"
                        :counter="30"
                        label="文章标题"
                        data-vv-name="title"
                        required
          ></v-text-field>
          <v-text-field v-model="formData.path"
                        :rules="rules.path"
                        label="外链地址"
                        data-vv-name="path"
                        required
          ></v-text-field>
          <v-textarea v-model="formData.desc"
                      label="描述"
                      rows="4"
          ></v-textarea>

          <v-autocomplete v-model="formData.tags"
                          :items="allTags"
                          item-text="tagName"
                          item-value="id"
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
          </v-autocomplete>

          <v-btn block dark color="primary" @click="createOutsideArticel">分 享</v-btn>
        </v-flex>
        <v-flex xs4 pl-4>
          <v-text-field v-model="formData.coverImage"
                        :counter="10"
                        label="封面图片"
                        data-vv-name="coverImage"
                        required></v-text-field>

          <v-img :src="formData.coverImage"
                 height="320"
                 aspect-ratio="1"></v-img>
        </v-flex>
      </v-layout>
    </v-form>

    <tag-edit-form @newTag="addNewTag" :isShow="isShowDialog"></tag-edit-form>
  </v-container>
</template>
<script>
  import gql from 'graphql-tag';
  import TagEditForm from '@components/tag-edit-form/';
  import { error } from 'util';

  export default {
    name: 'EditOutsideArticle',
    data() {
      return {
        formData: {},
        allTags: [],
        isShowDialog: false,
        alert: {
          isShow: false,
          type: 'success',
          msg: '链接分享成功！'
        },
        rules: {
          title: [
            v => !!v || '文章标题是必填项，请注意填写',
            v => (v && v.length <= 30) || '文章标题字数不可以超过20个字'
          ],
          path: [
            v => !!v || '文章外链是必填项，请注意填写',
          ],
          tags: [
            v => !!v || '文章标签至少勾选一个哦'
          ]
        }
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
      addNewTag(data) {
        this.allTags.push(data);
        if (!this.formData.tags) {
          this.formData.tags = [];
        }
        this.formData.tags.push(data.id);
      },
      async createOutsideArticel() {
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        try {
          const result = await this.$apollo.mutate({
            mutation: gql`
              mutation createOutsideArticle ($input: Input_OutsideArticle!) {
                createOutsideArticle(input: $input) {
                  id
                  title
                  desc
                  path
                  coverImage
                  hasRead
                  stars
                  source
                }
              }
            `,
            // 参数
            variables: {
              input: this.formData
            }
          });
          console.log(result);
        } catch (err) {
          console.error(error);

        }
      },
      createArticleTag() {
        this.isShowDialog = true;
      },
      showAlertOnTime() {

      }
    },
    components: {
      TagEditForm
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
