<template>
  <form @submit.prevent="userLogin">
    <div>
      <label for="id">ID：</label>
      <input type="text" v-model="form.id" />
    </div>
    <div>
      <label for="password">パスワード：</label>
      <input type="password" v-model="form.password" />
    </div>
    <div>
      <button type="submit">ログイン</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      form: {
        id: '',
        password: '',
      },
    }
  },
  methods: {
    userLogin() {
      this.$auth.loginWith('local', {
        data: this.form,
      })
    },
  },
})
</script>
