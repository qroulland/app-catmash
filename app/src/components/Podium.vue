<template>
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
      v-for="(cat, index) in cats"
      :key="cat.id"
    >
      <div class="position d-flex flex-column align-items-center">
        {{ index + 1 }}
        <img
          :src="require(`./../assets/${svgArray[index]}`)"
          :alt="`Svg position N°${index + 1}`"
          class="mt-3"
          width="64px"
          height="64px"
        >
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
</template>

<script>
export default ({
  name: 'Podium',
  props: {
    cats: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      svgArray: [
        'award.png',
        '2nd-place.png',
        '3rd-place.png'
      ],
    }
  }
})
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
