<template>
  <div class="view-container">
    <div class="pet-content grid-content">
      <PetDetail :initialPet="pet" />
      <Adopter />
    </div>
  </div>
</template>

<script>
import PetDetail from "../components/PetDetail.vue";
import Adopter from "../components/Adopter.vue";
import petsAPI from "../apis/pets";

export default {
  components: {
    PetDetail,
    Adopter,
  },
  data() {
    return {
      pet: {},
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await petsAPI.getPets();
        const currentRoute = Number(this.$router.currentRoute.params.id);
        this.pet = response.data[currentRoute - 1];
      } catch (error) {
        console.log("error");
      }
    },
    async beforeRoutefetchPets(id) {
      try {
        const response = await petsAPI.getPets();
        const currentRoute = Number(id);
        this.pet = response.data[currentRoute - 1];
      } catch (error) {
        console.log("error");
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.beforeRoutefetchPets(id);
    next();
  },
};
</script>

<style lang="scss" scoped>
.pet-content {
  height: calc(100% - 150px);
}

@media (max-width: 576px) {
  .view-container {
    width: 95vw;
  }
  .pet-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>