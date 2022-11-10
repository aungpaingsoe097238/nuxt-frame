<template>
  <b-spinner label="Loading..." type="grow" :small="small" ></b-spinner>
</template>

<script>
  export default {
    props: {
      small: {
        default: null
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
