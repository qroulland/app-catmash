<template>
  <div class="ranking">
    <h2>Leaderboard</h2>
    <v-podium :cats="sortCatsByVote.slice(0, 3)" />
    <div class="d-flex flex-column align-items-center my-5">
      <div
        v-for="cat in sortCatsByVote.slice(3, sortCatsByVote.lenght)"
        :key="cat.id"
        class="rank-container w-50 pe-4"
      >
        <img
          :src="cat.url"
          alt=""
          width="100"
          height="100"
          class="rounded-circle"
        >
        <div class="points">
          <span class="fw-bold">
            {{ cat.vote }}
          </span>pt{{ cat.vote > 0 ? 's' : '' }}
        </div>
        <a
          :href="cat.url"
          target="_blank"
          class="text-decoration-none text-white ms-auto d-flex align-items-center"
        >
          Voir l'image
          <font-awesome-icon
            class="ms-2"
            icon="chevron-right"
          />
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
import Podium from '@/components/Podium';

export default {
  name: 'Ranking',
  components: {
    'v-podium': Podium,
  },
  data() {
    return {
      cats: [],
    };
  },
  computed: {
    sortCatsByVote() {
      const array = this.$store.state.cats
      return array.sort((a,b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0));
    }
  },
}
</script>

<style scoped>
.rank-container {
  background-color: rgba(0, 0, 0, .25);
  display: flex;
  align-items: center;
  border-radius: 48px;
  margin: .5rem 0;
}
.rank-container .points {
  color: #42b983;
  font-size: 2rem;
  margin-left: 1.5rem;
}
</style>
