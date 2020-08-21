const state = () => ({
  settings: {
    lineProfit: null,
    bingoProfit: null,
    frequency: null
  },
  currentGame: {
    isRunning: false,
    isStarted: false
  }
});

const getters = {
  settings: state => state.settings,
  isRunning: state => state.currentGame.isRunning,
  isStarted: state => state.currentGame.isStarted
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
  },
  unpause({ commit }) {
    commit("unpauseBingo");
  }
};

const mutations = {
  updateSettings(state, newSettings) {
    state.settings = { ...newSettings };
  },
  startBingo(state) {
    state.currentGame.isStarted = true;
    state.currentGame.isRunning = true;
  },
  pauseBingo(state) {
    state.currentGame.isRunning = false;
  },
  unpauseBingo(state) {
    state.currentGame.isRunning = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
