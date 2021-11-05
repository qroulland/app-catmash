<template>
  <div class="home">
    {{ randomCats }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      randomCats: [],
    }
  },
  computed: {
    ...mapGetters({
      cats: 'getCats',
    }),
  },
  methods: {
    getTwoRandomCat() {
      this.randomCats = [];

      const catOne = this.cats[Math.floor(Math.random() * this.cats.length)];
      let catTwo = this.cats[Math.floor(Math.random() * this.cats.length)];

      while (catOne.id === catTwo.id) {
        catTwo = this.cats[Math.floor(Math.random() * this.cats.length)];
      }

      this.randomCats.push(catOne, catTwo);
    }
  },
  mounted() {
    this.getTwoRandomCat();
  }
}
</script>
