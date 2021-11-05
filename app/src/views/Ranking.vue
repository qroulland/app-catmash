<template>
  <div class="ranking">
    <h2>Leaderboard</h2>
    <v-podium :cats="catsSortedByVote.slice(0, 3)" />
  </div>
</template>

<script>
import Podium from '@/components/Podium';
import { mapGetters } from 'vuex';

export default {
  name: 'Ranking',
  components: {
    'v-podium': Podium,
  },
  computed: {
    ...mapGetters({
      cats: 'getCats',
    }),
    catsSortedByVote() {
      const catsArray = this.cats;
      return catsArray.sort((a,b) => (a.vote > b.vote) ? 1 : ((b.vote > a.vote) ? -1 : 0));
    },
  },
}
</script>
