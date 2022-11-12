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
        
      }
    },
    created () {
      this.checkAuth();
    },
  }
</script>

<style lang="scss" scoped>

</style>
