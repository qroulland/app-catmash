<template>
  <div class="home">
    {{ cats }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      cats: 'getCats',
    }),
  },
}
</script>
