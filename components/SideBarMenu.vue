<template>
  <li class="rounded-5 text-start text-black">
    <NuxtLink class="nav-link" :to="uri">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <i :class="icon"></i>
            <span >{{ title }}</span>
          </div>
        </div>
      </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bi bi-circle'
    },
    title: {
      type: String,
      default: 'Title'
    },
    uri: {
      type: String,
      default: '#'
    }
  },
}
</script>

<style lang="scss" scoped></style>
