<template>
  <div id="app">
    <img
      class="icon cursor"
      v-show="scY > 300"
      @click="toTop"
      src="./assets/icons/pin-top.svg"
      alt=""
    />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    // eslint-disable-next-line
    $route: function (to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" src="@/assets/style/global.scss">
</style>

<style lang="scss">
.icon {
  position: fixed;
  bottom: 50px;
  right: 10px;
}
</style>
