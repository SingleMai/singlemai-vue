<template>
  <v-menu v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
    <v-text-field slot="activator"
                  v-model="dateModel"
                  :label="label"
                  prepend-icon="event"
                  readonly></v-text-field>
    <v-date-picker v-model="dateModel" @input="menu = false"></v-date-picker>
  </v-menu>
</template>
<script>
  export default {
    name: 's-date-picker',
    props: {
      date: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: '创建日期'
      }
    },
    data() {
      return {
        menu: false,
        dateModel: this.date || new Date()
      };
    },
    watch: {
      dateModel(value) {
        this.$emit('update:date', value);
      }
    }
  };
</script>

<style lang='scss' scoped='' type='text/css'>
</style>
