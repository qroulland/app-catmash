<template>
  <div
    id="app"
    v-if="ready"
    class="min-vh-100 p-5"
  >
    <router-link
      to="/"
      class="h1 fw-bold text-white text-decoration-none position-relative"
      style="z-index: 10"
    >
      <font-awesome-icon icon="paw" />
      CATMASH
      <font-awesome-icon icon="paw" />
    </router-link>
    <transition
        name="fade"
        mode="out-in"
      >
        <router-view
          :key="$route.path"
          class="mt-3"
        />
      </transition>
  </div>
</template>

<script>
import { getCats } from '@/services/api';

export default {
  data() {
    return {
      ready: false,
    };
  },
  methods: {
    async findCats() {
      const cats = await getCats();
      await this.$store.dispatch('setValue', { cats });
      this.ready = true;
    }
  },
  created() {
    this.findCats();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: white;
  width: 100%;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
