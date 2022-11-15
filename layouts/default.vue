<template>
  <b-container fluid>
    <b-row class="main">
      <b-col class="sidebar vh-100 " :style="getSideBarStatus ? '' : 'width:84px'" >
        <SideBar/>
      </b-col>
      <b-col class="content bg-secondary" :style="getSideBarStatus ? '' : 'margin-left:84px'" >
        <Nuxt/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  middleware: ['private'],
  computed: {
    ...mapGetters('utli',['getSideBarStatus'])
  },
  methods: {
    checkAuth() {
      if (
        this.$auth.$storage.getLocalStorage('token') &&
        this.$auth.$storage.getLocalStorage('user')
      ) {
        this.$store.commit(
          'addAccessToken',
          this.$auth.$storage.getLocalStorage('token')
        )
        this.$store.commit(
          'addUser',
          this.$auth.$storage.getLocalStorage('user')
        )
      } else {
        this.$router.push('/auth/login')
      }
    },
  },
  created() {
    this.checkAuth()
  },
}
</script>
