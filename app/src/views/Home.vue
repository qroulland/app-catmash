<template>
  <div class="home">
    <h2>
      Who's the cutest cat ever ?
    </h2>
    <div class="content">
      <div class="leftSide w-50">
        <v-picture
          v-if="randomCats[0]"
          :url="randomCats[0].url"
          :id="randomCats[0].id"
          :canVote="true"
          @vote="vote(randomCats[0].id)"
        />
      </div>
      <div class="rightSide w-50">
        <v-picture
          v-if="randomCats[1]"
          :url="randomCats[1].url"
          :id="randomCats[1].id"
          :canVote="true"
          @vote="vote(randomCats[1].id)"
        />
      </div>
    </div>
    <div class="fixed-bottom pb-5">
      <router-link
        to="/ranking"
        class="btn btn-lg btn-warning text-white"
      >
        Check the leaderboard
        <font-awesome-icon icon="trophy" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Picture from '@/components/Picture';

export default {
  name: 'Home',
  components: {
    'v-picture': Picture,
  },
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
    },
    vote(id) {
      this.$store.dispatch('vote', id);
      this.getTwoRandomCat();
    }
  },
  mounted() {
    this.getTwoRandomCat();
  }
}
</script>

<style scoped>
.home h2 {
  z-index: 1;
  position: relative;
}
.content {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.leftSide,
.rightSide {
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.leftSide:hover,
.rightSide:hover {
  background-color: rgba(0, 0, 0, .5);
}
</style>
