<template>
  <div class="ranking">
    <h2>Leaderboard</h2>
    <v-podium :cats="sortByVote(cats).slice(0, 3)" />
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
  },
  methods: {
    sortByVote(cats) {
      return cats.sort((a,b) => (a.vote < b.vote) ? 1 : ((b.vote < a.vote) ? -1 : 0));
    },
  },
}
</script>
