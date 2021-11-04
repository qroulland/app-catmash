<template>
  <div class="ranking">
    <h1>Leaderboard</h1>
    <v-podium :cats="catsSortedByVote.slice(0, 3)" />
  </div>
</template>

<script>
import { getCats } from '@/services/api';
import Podium from '@/components/Podium';

export default {
  name: 'Ranking',
  components: {
    'v-podium': Podium,
  },
  data () {
    return {
      cats: [],
    }
  },
  computed: {
    catsSortedByVote() {
      const array = this.cats
      return array.sort((a,b) => (a.vote > b.vote) ? 1 : ((b.vote > a.vote) ? -1 : 0));
    },
  },
  async mounted() {
    this.cats = await getCats();
  }
}
</script>
