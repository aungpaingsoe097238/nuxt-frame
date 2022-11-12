<template>
  <b-container fluid>
    <b-row class=" vh-100 justify-content-end">
      <!-- SideBar -->
      <b-col lg="2" class="sidebar vh-100 shadow-sm" >
        <SideBar/>
      </b-col>
      <!-- Content -->
      <b-col lg="10" class="bg-secondary shadow-sm" >
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
          
        }
      }
    },
    created () {
      this.checkAuth();
    },
  }
</script>
