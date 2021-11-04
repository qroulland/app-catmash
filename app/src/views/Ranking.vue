<template>
  <div class="ranking">
    <h1>Podium</h1>
    <div class="d-flex justify-content-center">
      <div
        class="d-flex flex-column"

        :class="[
          {
            'order-1 rank-2': index === 1,
          },
          {
            'order-2 rank-1': index === 0,
          },
          {
            'order-3 rank-3': index === 2,
          },
        ]"
        v-for="(cat, index) in catsSortedByVote.slice(0, 3)"
        :key="cat.id"
      >
        <div class="position">
          {{ index + 1 }}
        </div>
        <img
          class="rounded-circle icon"
          :src="cat.url"
          :alt="`Photo N°${cat.id}`"
          width="250"
          height="250"
        >
        <div class="points">
          {{ cat.vote }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCats } from '@/services/api';

export default {
  name: 'Ranking',
  data () {
    return {
      cats: []
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

<style scoped>
.icon {
  border: 3px solid #42b983;
  box-shadow: 0px 0px 30px 0px #42b983;
}
.position {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.points {
  margin-top: 1rem;
  font-size: 2.5rem;
  color: #42b983;
  font-weight: 300;
}
.rank-1 {
  z-index: 1;
}
.rank-1 .icon {
  border: 6px solid #42b983;
}
.rank-2 {
  margin-top: 4rem;
  margin-right: -2rem;
}
.rank-3 {
  z-index: 0;
  margin-top: 4rem;
  margin-left: -2rem;
}
</style>>
