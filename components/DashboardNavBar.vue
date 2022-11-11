<template>
  <div>
    <div class="py-2">
      <b-navbar toggleable="lg" class="bg-white shadow-sm" style=" border-radius:5px; ">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>
    </div>
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
