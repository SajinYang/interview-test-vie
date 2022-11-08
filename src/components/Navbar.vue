<template>
  <div id="nav" class="d-flex-center shadow">
    <router-link class="nav-title" to="/">毛孩領養星球</router-link>
    <div class="control">
      <img
    v-if="mode === 'light'"
        class="control-icon cursor"
        src="../assets/icons/moon.svg"
        alt=""
        @click="changeMode('dark')"
      />
      <img
      v-else
        class="control-icon cursor"
        src="../assets/icons/sun.svg"
        alt=""
        @click="changeMode('light')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'light'
    };
  },
  methods: {
    changeMode(type) {
      if (type === 'dark') {
        this.mode = 'dark'
      }
      if (type !== 'dark') {
        this.mode = 'light'
      }
      
      window.document.documentElement.setAttribute("data-theme", type);
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--background);

  .nav-title {
    font-size: 1.5rem;
    font-weight: 600;    
    color: var(--brand-color);
  }
}

.control {
  position: absolute;
  right: 1rem;
}

.control-icon {
  height: 30px;
  width: 30px;
}
</style>