<template>
  <div class="">
    <div class="sidebar-header">
      <span class="text-dark font-weight-bold d-flex justify-content-start align-items-center">
        <img src="favicon.ico" class="sidebar-header-icon mr-2" alt="" />
        <span>Nuxt Dashboard</span>
      </span>

      <i class="bi bi-list"></i>
    </div>

    <ul class="w-100 list-unstyled">
      <SideBarMenu icon="bi bi-house" title="Dashboard" uri="/dashboard" />

      <div class="dropdown-divider"></div>

      <!-- Role & Permissions -->
      <span class="text-black-50 small text-uppercase">Role & Permission</span>
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
export default {
  data() {
    return {
      roles: [
        { title: 'lists', uri: 'dashboard/roles/lists' },
        { title: 'create', uri: 'dashboard/roles/create' },
      ],
      permissions: [
        { title: 'lists', uri: 'dashboard/permissions/lists' },
        { title: 'create', uri: 'dashboard/permissions/create' },
      ],
    }
  },
}
</script>
