<template>
  <div class="ranking">
    {{ cats }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ranking',
  data () {
    return {
      cats: []
    }
  },
  mounted() {
    axios.get('http://localhost:8000/api/cats').then(response => {
      this.cats = response.data.data
    })
  }
}
</script>
