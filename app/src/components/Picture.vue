<template>
  <img
    class="rounded-circle icon"
    :src="url"
    :alt="`Photo N°${id}`"
    width="250"
    height="250"
    @click="emit('vote')"
  >
</template>

<script>
export default {
  name: 'Picture',
  props: {
    url: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    emit(event) {
      this.$emit(event)
    }
  }
}
</script>

<style scoped>
.icon {
  border: 3px solid #42b983;
  box-shadow: 0px 0px 30px 0px #42b983;
}
.glow {
  animation: glow 1.5s infinite alternate;
}
.glow:hover {
  background-color: rgba(0,0,0,.5);
}
@keyframes glow {
  from {
    box-shadow: 0px 0px 30px -5px #42b983;
  }
  to {
    box-shadow: 0px 0px 30px 5px #42b983;
  }
}
</style>