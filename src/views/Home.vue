<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Form @submit="onSubmit" v-slot="{ errors }">
    {{ errors }}
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field id="email" name="email" type="email" class="form-control"
               placeholder="請輸入 Email"
               rules="email|required"
               :class="{ 'is-invalid': errors['email'] }"
               v-model="user.email"
               ></Field>
      <Error-Message name="email" class="invalid-feedback"></error-message>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    }
  },
  created () {
    console.log(this)
  }
}
</script>
