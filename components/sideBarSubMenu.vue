<template>
  <li>
    <div class="main-menu" @click="toggleMenu">
      <a href="#" class="nav-link" >
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <i :class="icon"></i>
            <span v-if="getSideBarStatus">{{ title }}</span>
          </div>
          <div v-if="getSideBarStatus">
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
    v-if="getSideBarStatus"
    :class="[{ 'd-none': showSubMenu }, showSubMenu ? '' : 'down-animation' ]">
      <li v-for="(menu, index) in menus" :key="index">
        <NuxtLink class="nav-link" :to="menu.uri">
          <div class="ml-2">
            <i class="bi bi-circle" style="font-size: 10px"></i>
            <span>{{ menu.title }}</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';
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
    status: {
      type: Boolean,
      default : true,
    }
  },
  computed: {
    ...mapGetters('utli',['getSideBarStatus'])
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

