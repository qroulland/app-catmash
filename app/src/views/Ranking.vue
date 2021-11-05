<template>
  <div class="ranking">
    <h2>Leaderboard</h2>
    <v-podium :cats="getPodium" />
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
    getPodium() {
      const array = this.$store.state.cats
      return array.sort((a,b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0)).slice(0, 3);
    }
  },
}
</script>
