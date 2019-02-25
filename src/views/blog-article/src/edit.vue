<template>
  <div class="blog-article-edit">
    <h2 class="s-title">撰写博客</h2>
    <!-- upload -->
    <a-form :form="form" layout="horizontal">
      <a-form-item v-bind="formItemLayout" label="文章标题">
        <a-input placeholder="输入博客的标题内容"></a-input>
      </a-form-item>
      <a-form-item :wrapperCol="buttonItemLayout">
        <a-button type="primary">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
  <!-- <v-container fluid>
    <v-alert :value="alert.isShow" :type="alert.type">
      {{ alert.msg }}
    </v-alert>
    <v-layout row align-center>
      <strong class="title">撰写博客</strong>
      <s-upload @files="getFileData" label="上传.md文件，快速创建博客"></s-upload>
    </v-layout>
    <v-form ref="form">
      <v-layout row>
        <v-flex xs8>
          <v-layout row justify-space-between>
            <v-flex xs4>
              <s-date-picker :date.sync="formData.createdAt"></s-date-picker>
            </v-flex>
            <v-flex xs4>
              <s-date-picker label="更新日期" :date.sync="formData.updatedAt"></s-date-picker>
            </v-flex>
          </v-layout>

          <v-text-field v-model="formData.title"
                        :rules="rules.title"
                        :counter="30"
                        label="文章标题"
                        data-vv-name="title"
                        required
          ></v-text-field>

          <v-textarea v-model="formData.desc"
                      label="描述"
                      placeholder="选填项，默认会取文章的前面字数进行填写"
                      rows="4"
          ></v-textarea>

          <v-select v-model="formData.categoryId"
                :items="allCategory"
                item-text="categoryName"
                item-value="categoryId"
                label="分类"
                placeholder="为文章选择合适的分类"
                persistent-hint>
            <!-- <v-list-tile slot="append-item" ripple @click="createArticleTag">
              <v-list-tile-action>
                <v-icon>add</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>添加文章分类</v-list-tile-title>
            </v-list-tile> -->
          <!-- </v-select>

          <v-autocomplete v-model="formData.tags"
                          :items="allTags"
                          item-text="tagName"
                          item-value="id"
                          label="标签"
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
      <mavon-editor style="z-index:1;" :toolbars="toolBars" v-model="formData.mainBody"></mavon-editor>
      <v-btn block dark color="primary" @click="createBlogArticel">分 享</v-btn>
    </v-form>

    <tag-edit-form @newTag="addNewTag" :isShow="isShowDialog"></tag-edit-form>
  </v-container> -->
</template>
<script>
import query from '@graphql/';
import TagEditForm from '@components/tag-edit-form/';
import { error } from 'util';
import gql from 'graphql-tag';

  export default {
    name: 'BlogArticleEdit',
    data() {
      return {
        form: this.$form.createForm(this),
        formItemLayout: {
          labelCol: { span: 3 },
          wrapperCol: { span: 14 }
        },
        buttonItemLayout: {
          span: 14,
          offset: 4
        },
        formData: {},
        allTags: [],
        allCategory: [],
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
          categoryId: [
            v => !!v || '文章必须所属一个分类下，请选择相应分类'
          ],
          tags: [
            v => !!v || '文章标签至少勾选一个哦'
          ],
        },
        toolBars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          undo: true, // 上一步
          redo: true, // 下一步
          save: true, // 保存（触发events中的save事件
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true // 右对齐
        }
      };
    },
    apollo: {
      allTags: {
        query: query.FIND_ALL_ARTICLE_TAG,
        update(data) {
          return data.findAllArticleTag;
        }
      },
      allCategory: {
        query: query.FIND_TAG_CATEGORY,
        update(data) {
          return data.findAllTagCategory;
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
      async getFileData(file) {
        const data = await this.$apollo.mutate({
          mutation: query.UPLOAD_BLOG_ARTILCE,
          variables: {
            file: file[0]
          }
        });
        console.log(data);
      },
      createArticleTag() {
        this.isShowDialog = true;
      },
      async createBlogArticel() {
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        try {
          const result = await this.$apollo.mutate({
            mutation: query.CREATE_BLOG_ARTICLE,
            // 参数
            variables: {
              input: this.formData
            }
          })
        } catch (err) {
          console.error(error);
        }
      },
      showAlertOnTime() {}
    },
    components: {
      TagEditForm
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
