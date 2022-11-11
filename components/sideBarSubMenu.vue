<template>
  <li>
    <div class="main-menu" @click="toggleMenu">
      <a href="#" class="nav-link" >
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <i :class="icon"></i>
            <span>{{ title }}</span>
          </div>
          <div>
            <i
              :class="
                showSubMenu ? 'bi bi-chevron-right' : 'bi bi-chevron-down'
              "
              style="font-size: 10px"
            ></i>
          </div>
        </div>
      </a>
    </div>
    <ul class="sub-menu w-100 list-unstyled"
    :class="[{ 'd-none': showSubMenu }, showSubMenu ? '' : 'submenu-animation' ]">
      <li v-for="(menu, index) in menus" :key="index">
        <NuxtLink class="nav-link" :to="menu.uri">
          <div>
            <i class="bi bi-circle" style="font-size: 10px"></i>
            <span>{{ menu.title }}</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bi bi-house',
    },
    title: {
      type: String,
      default: 'MenuTitle',
    },
    menus: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showSubMenu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.showSubMenu = !this.showSubMenu
    },
  },
}
</script>

