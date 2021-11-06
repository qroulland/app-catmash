<template>
  <div
    class="imageContainer"
    @click="emit('vote')"
  >
    <img
      class="rounded-circle icon"
      :class="{'glow': canVote}"
      :src="url"
      :alt="`Photo N°${id}`"
      width="250"
      height="250"
    >
    <div
      v-if="canVote"
      class="overlay rounded-circle"
    >
      <div class="overlayText">Miaow!</div>
    </div>
  </div>
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
    canVote: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emit(event) {
      if (this.canVote) {
        this.$emit(event)
      }
    }
  }
}
</script>

<style scoped>
.imageContainer {
  position: relative;
  widows: 250px;
  height: 250px;
}
.imageContainer:hover .overlay {
  opacity: 1;
  cursor: pointer;
}
.icon {
  border: 3px solid #42b983;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .6s ease;
  background-color: rgba(66, 185, 131, .5);
}
.overlayText {
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.leftSide:hover .glow,
.rightSide:hover .glow {
  animation: glow 1s infinite alternate;
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