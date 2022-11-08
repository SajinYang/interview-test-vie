<template>
  <div class="card-wrapper shadow" @click.stop.prevent="linkToPet(pet.id)">
    <img
      class="card-img"
      :src="pet.img"
      alt=""
    />
    <h3 class="card-title">{{ pet.name }}</h3>
    <h6 class="card-click">點我認養</h6>
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
  data() {
    return {
      pet: this.initialPet,
    };
  },
  methods: {
    linkToPet(petId) {
      this.$router.push(`/pets/${petId}`);
    }
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  cursor: pointer;
  height: 300px;
}

.card-title, .card-click {
  position: absolute;
  text-align: center;
  color: var(--normal-color);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.card-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-click {
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
}

.card-wrapper:hover .card-title,
.card-wrapper:hover .card-click {
  opacity: 1;
}

.card-wrapper:hover .card-img {
  opacity: 0.4;
}
</style>