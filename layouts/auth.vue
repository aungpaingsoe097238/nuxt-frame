<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'auth',
    middleware : ['public'],
    methods: {
      checkAuth() {
        if(this.$auth.$storage.getLocalStorage('token') && this.$auth.$storage.getLocalStorage('user')){
          this.$router.push('/dashboard');
        }
      }
    },
    created () {
      this.checkAuth();
    },
  }
</script>

<style lang="scss" scoped>

</style>
