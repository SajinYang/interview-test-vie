<template>
  <div class="view-container d-flex-center-column">
    <div class="top">
      <img class="notfound-img mb-2" src="../assets/images/pet_darui_dog.png" alt="" />
      <h4 class="d-flex-center mb-2">404 Not Found</h4>
    </div>
    <button class="back d-flex-center" @click="$router.go(-1)">back</button>
  </div>
</template>

<style lang="scss" scoped>
.notfound-img {
  height: 300px;
  width:300px;
}

.back {
  font-size: 20px;
  color: var(--brand-color);
  text-decoration: underline;
}
</style>