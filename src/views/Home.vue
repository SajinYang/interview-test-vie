<template>
  <div class="home view-container">
    <Title />
    <div class="all-card-wrapper">
      <div class="title d-flex-center-column">
        <h3 class="mb-1">帶我回家</h3>
        <p>
          分類：
          <span class="cursor" @click.stop.prevent="setVisibility('all')"
            ><u>ALL</u></span
          >
          <span>、</span>
          <span class="cursor" @click.stop.prevent="setVisibility('dog')"
            ><u>狗狗</u></span
          >
          <span>、</span>
          <span class="cursor" @click.stop.prevent="setVisibility('cat')"
            ><u>貓貓</u></span
          >
        </p>
      </div>
      <div class="card-container">
        <PetCard v-for="pet in filteredpets" :key="pet.id" :initialPet="pet" />
      </div>
    </div>
  </div>
</template>

<script>
import PetCard from "../components/PetCard.vue";
import Title from "../components/Title.vue";
import petsAPI from "../apis/pets";

const filters = {
  all: (pets) => pets,
  dog: (pets) => pets.filter((pet) => pet.type === "dog"),
  cat: (pets) => pets.filter((pet) => pet.type === "cat"),
};

export default {
  name: "Home",
  components: {
    Title,
    PetCard,
  },
  data() {
    return {
      pets: [],
      visibility: "all",
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await petsAPI.getPets();
        this.pets = response.data;
      } catch (error) {
        console.log("error");
      }
    },
    setVisibility(visibility) {
      this.visibility = visibility;
    },
  },
  computed: {
    filteredpets() {
      return filters[this.visibility](this.pets);
    },
  },
};
</script>

<style lang="scss" scoped>
.all-card-wrapper, .title {
  margin: 2rem 0;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-gap: 1.5rem;
}
</style>
