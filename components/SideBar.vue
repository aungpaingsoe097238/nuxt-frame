<template>
  <div>
    <div
    class="d-flex align-items-center w-100 position-sticky top-0"
    :class="getSideBarStatus ? 'justify-content-between' : 'justify-content-center'"
    >
        <h5 class="mb-0" v-if="getSideBarStatus">Nuxt Title</h5>
        <i
          class="bi bi-list"
          style="font-size: 25px; cursor: pointer; margin-right: 0"
          @click="changeSideBarStatus"
        >
        </i>
    </div>

    <ul class="w-100 list-unstyled">
      <SideBarMenu icon="bi bi-house" title="Dashboard" uri="/dashboard" />

      <div v-if="getSideBarStatus">
        <div class="dropdown-divider"></div>
        <span class="text-black-50 small text-uppercase"
          >Role & Permission</span
        >
      </div>

      <SideBarSubMenu
        icon="bi bi-circle"
        title="Role"
        :menus="roles"
        class="mt-2"
      />

      <SideBarSubMenu
        icon="bi bi-circle"
        title="Permission"
        :menus="permissions"
        class="mt-2"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      roles: [
        { title: 'lists', uri: 'dashboard/roles' },
        { title: 'create', uri: 'dashboard/roles/create' },
      ],
      permissions: [
        { title: 'lists', uri: 'dashboard/permissions/lists' },
        { title: 'create', uri: 'dashboard/permissions/create' },
      ],
    }
  },
  computed: {
    ...mapGetters('utli', ['getSideBarStatus']),
  },
  methods: {
    changeSideBarStatus() {
      this.$store.commit('utli/changeSideBarStatus')
    },
  },
}
</script>

<style scope></style>
