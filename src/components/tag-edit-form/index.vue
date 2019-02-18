<template>
  <v-dialog v-model="isShowDialog" persistent max-width="600px">
    <v-form ref="form">
      <v-card>
        <v-card-title>
          <span class="headline">添加标签</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="formData.tagName"
                        :rules="rules.tagName"
                        label="标签名称"
                        required></v-text-field>
        <v-select v-model="formData.categoryId"
                  :items="tagCategories"
                  :rules="rules.categoryId"
                  item-text="categoryName"
                  item-value="categoryId"
                  label="标签所属分类"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="isShowDialog = false">关闭</v-btn>
          <v-btn color="blue darken-1" flat @click="saveArticleTag">添加</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
  import gql from 'graphql-tag';

  export default {
    name: 'TagEditForm',
    data() {
      return {
         isShowDialog: this.isShow,
         tagCategories: [],
         formData: {},
         rules: {
           tagName: [
             v => !!v || '文章标签名是必填项，请注意填写',
             v => (v && v.length <= 10) || '文章标签名不可以超过10个字'
           ],
           categoryId: [
             v => !!v || '文章标签类别是必填项，请注意勾选'
           ]
         }
      };
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
    },
    apollo: {
      tagCategories: {
        query: gql`
          query {
            findAllTagCategory {
              id
              categoryId
              categoryName
            }
          }
        `,
        // 自定义解析result结果的参数。
        update(data) {
          return data.findAllTagCategory;
        }
      }
    },
    methods: {
      async saveArticleTag() {
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        const result = await this.$apollo.mutate({
          mutation: gql`
            mutation createArticleTag ($input: Input_ArticleTag!) {
              createArticleTag(input: $input) {
                id
                tagName
                useTimes
                categoryId
              }
            }
          `,
          // 参数
          variables: {
            input: this.formData
          }
        });
        this.isShowDialog = false;        
        this.$emit('newTag', result.data.createArticleTag);
      }
    },
    watch: {
      isShow(value) {
        this.isShowDialog = value;
      },
      isShowDialog(value) {
        this.$emit('update:isShow', value);
      }
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
