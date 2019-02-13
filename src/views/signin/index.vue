<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>账号登录</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="formData.email"
                            :rules="rules.email"
                            :counter="20"
                            prepend-icon="email"
                            label="邮箱"
                            type="text"></v-text-field>
              <v-text-field v-model="formData.password"
                            :rules="rules.password"
                            prepend-icon="lock"
                            label="Password"
                            type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signin">登录</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Signin',
    data() {
      return {
        formData: {},
        rules: {
          email: [
            v => !!v || '邮箱是必填项，请注意填写',
          ],
          password: [
            v => !!v || '密码是必填项，请注意填写',
          ]
        }
      };
    },
    methods: {
      async signin() {
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        try {
          const result = await this.$apollo.query({
            query: this.$gql.SIGNIN,
            // 参数
            variables: {
              input: this.formData
            }
          });
          const userResult = result.data.signin;
          const { user, token } = userResult;

          const { LOCAL_STORAGE } = this.$constant;

          this.$storage.set(LOCAL_STORAGE.USER_TOKEN, token);
          this.setUserInfo(user);

        } catch (err) {
          console.error(err);
        }
      },
      ...mapMutations({
        'setUserInfo': 'setUserInfo'
      })
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
