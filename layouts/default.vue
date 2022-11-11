<template>
  <b-container fluid>
    <b-row class=" vh-100 justify-content-end">
      <!-- SideBar -->
      <b-col lg="2" class="sidebar vh-100" >
        <SideBar/>
      </b-col>
      <!-- Content -->
      <b-col lg="10" class="" >
        <Nuxt/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {

  }
</script>
