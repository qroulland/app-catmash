import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [],
  },
  getters: {
    getCats: (state) => state.cats,
  },
  mutations: {
    SET_VALUE(state, object) {
      const [key] = Object.keys(object);
      state[key] = object[key];
    },
    VOTE(state, id) {
      const index = state.cats.indexOf(state.cats.find((cat) => cat.id === id));
      console.log(index);
      state.cats[index].vote++;
    }
  },
  actions: {
    setValue({ commit }, object) {
      commit('SET_VALUE', object);
    },
    vote({ commit }, id) {
      commit('VOTE', id);
    }
  },
})
