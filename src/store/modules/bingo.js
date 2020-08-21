import { generateRandomNumber, MIN, MAX } from "../../utils/bingo";

const state = () => ({
  settings: {
    lineProfit: null,
    bingoProfit: null,
    frequency: null
  },
  currentGame: {
    isRunning: false,
    isStarted: false,
    numbers: []
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
  start({ commit, dispatch, state }) {
    commit("startBingo");
    dispatch("calculateNum", state.settings.frequency);
  },
  pause({ commit }) {
    commit("pauseBingo");
  },
  unpause({ commit }) {
    commit("unpauseBingo");
  },
  calculateNum({ commit, state }, frequency) {
    const calculateNextNumber = () => {
      let number = generateRandomNumber(MIN, MAX);
      while (state.currentGame.numbers.includes(number)) {
        number = generateRandomNumber(MIN, MAX);
      }
      return number;
    };

    const pid = setInterval(() => {
      if (state.currentGame.numbers.length === MAX) {
        clearInterval(pid);
        return;
      }
      const newNumber = calculateNextNumber();
      commit("addNumber", newNumber);
    }, frequency);
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
  },
  addNumber(state, newNumber) {
    state.currentGame.numbers.push(newNumber);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
