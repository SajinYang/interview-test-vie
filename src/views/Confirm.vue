<template>
  <div class="view-container d-flex-center-column">
    <img class="confirm-img mb-2" src="../assets/images/pet_dog_dance_man.png" alt="">
    <p class="mb-2">
      您已成功送出資料！<br>
      我們會再與您聯繫並說明相關手續細節<br>
      請您耐心等候，謝謝！
    </p>
    <button class="btn back" @click.stop.prevent="linkToBack()">回首頁</button>
  </div>
</template>

<script>
export default {
  methods: {
    linkToBack() {
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm-img {
  height: 300px;
  width:300px;
}
</style>