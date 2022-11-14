<template>
  <b-container fluid>
    <b-row class=" vh-100 justify-content-end">
      <b-col lg="2" class="sidebar vh-100 " >
        <SideBar/>
      </b-col>
      <b-col lg="10"  class="bg-secondary" >
        <DashboardNavBar>
          <Nuxt/>
        </DashboardNavBar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    middleware : ['private'],
    methods: {
      checkAuth() {
        if(this.$auth.$storage.getLocalStorage('token') && this.$auth.$storage.getLocalStorage('user')){
          this.$store.commit('addAccessToken',this.$auth.$storage.getLocalStorage('token'));
          this.$store.commit('addUser',this.$auth.$storage.getLocalStorage('user'));
        }else{
          this.$router.push('/auth/login');
        }
      },
    },
    created () {
      this.checkAuth();
    },
  }
</script>
