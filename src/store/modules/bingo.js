const state = () => ({
  settings: {
    lineProfit: null,
    bingoProfit: null,
    frequency: null
  },
  currentGame: {
    isRunning: false
  }
});

const getters = {
  settings: state => state.settings,
  isRunning: state => state.currentGame.isRunning
};

const actions = {
  setSettings({ commit }, settings) {
    commit("updateSettings", settings);
  },
  start({ commit }) {
    commit("startBingo");
  },
  pause({ commit }) {
    commit("pauseBingo");
  }
};

const mutations = {
  updateSettings(state, newSettings) {
    state.settings = { ...newSettings };
  },
  startBingo(state) {
    state.currentGame.isRunning = true;
  },
  pauseBingo(state) {
    state.currentGame.isRunning = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
