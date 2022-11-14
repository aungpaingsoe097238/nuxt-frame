<template>
  <div>
    <div class="py-2">
      <b-navbar
        toggleable="lg"
        class="bg-white shadow-sm"
        style="border-radius: 5px"
      >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="d-flex justify-content-end align-items-center w-100"
          >
            <div>
              <b-dropdown right variant="link" toggle-class="text-decoration-none" no-caret >
                <template #button-content>
                  <div class="d-flex align-items-center">
                    <span class="mr-2" >Aung Paing Soe</span>
                    <img src="avator.jpg" class="avator" alt="">
                  </div>
                </template>
                <b-dropdown-item>profile</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="logout">logout</b-dropdown-item>
              </b-dropdown>
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
      this.$auth.$storage.removeLocalStorage('token')
      this.$auth.$storage.removeLocalStorage('user')
      this.$store.commit('removeAccessToken')
      this.$store.commit('removeUser')
      this.$router.push('auth/login')
    },
  },
}
</script>

<style scoped></style>
