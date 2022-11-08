<template>
  <div class="detail-wrapper d-flex-around-column">
    <img class="detail-img" :src="initialPet.img" alt="" />
    <img
      class="icon"
      v-if="initialPet.sex === 'Female'"
      src="../assets/icons/gender-female-bold.svg"
      alt=""
    />
    <img
      class="icon"
      v-else
      src="../assets/icons/gender-male-bold.svg"
      alt=""
    />
    <div class="name">名字: {{ initialPet.name }}</div>
    <div class="species">品種: {{ initialPet.species }}</div>
    <div class="description">{{ initialPet.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    initialPet: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-wrapper {
  padding: 10px 2rem;
  background-color: var(--background-detail-color);
  border-radius: 8px;
  color: var(--description-color);
}
.detail-img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
}
</style>