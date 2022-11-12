<template>
  <div>
    <div class="py-2">
      <b-navbar toggleable="lg" class="bg-white shadow-sm" style=" border-radius:5px; ">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="d-flex justify-content-between align-items-center w-100">
            <div>
              <b-nav-item href="#" >Disabled</b-nav-item>
            </div>
            <div>
              <b-nav-item  class="text-danger font-weight-bold" @click="logout" >logout</b-nav-item>
            </div>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.$storage.removeLocalStorage('token');
      this.$auth.$storage.removeLocalStorage('user');
      this.$store.commit('removeAccessToken');
      this.$store.commit('removeUser');
      this.$router.push('auth/login');
    }
  },
}
</script>

<style lang="scss" scoped></style>
