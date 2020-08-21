const state = () => ({
  settings: {
    lineProfit: null,
    bingoProfit: null,
    frequency: null
  },
  currentGame: {}
});

const getters = {
  settings: state => state.settings
};

const actions = {
  setSettings({ commit }, settings) {
    commit("updateSettings", settings);
  }
};

const mutations = {
  updateSettings(state, newSettings) {
    state.settings = { ...newSettings };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
