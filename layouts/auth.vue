<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'auth',
    middleware : ['public']
  }
</script>

<style lang="scss" scoped>

</style>
