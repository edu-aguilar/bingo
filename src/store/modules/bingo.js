import {
  generateRandomNumber,
  MIN,
  MAX,
  LAST_NUMBERS_TO_SHOW
} from "../../utils/bingo";

let pid;

const state = () => ({
  settings: {
    lineProfit: null,
    bingoProfit: null,
    frequency: null
  },
  currentGame: {
    isRunning: false,
    isStarted: false,
    isFinished: false,
    numbers: []
  }
});

const getters = {
  settings: state => state.settings,
  isRunning: state => state.currentGame.isRunning,
  isStarted: state => state.currentGame.isStarted,
  lastNumber: state => state.currentGame.numbers[0],
  lastNumbers: state => {
    const nums = state.currentGame.numbers;
    if (nums.length <= LAST_NUMBERS_TO_SHOW) {
      return nums.slice(1, nums.length);
    } else {
      return nums.slice(1, LAST_NUMBERS_TO_SHOW + 1);
    }
  }
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
  unpause({ commit, dispatch, state }) {
    commit("unpauseBingo");
    dispatch("calculateNum", state.settings.frequency);
  },
  calculateNum({ commit, state }, frequency) {
    const calculateNextNumber = () => {
      let number = generateRandomNumber(MIN, MAX);
      while (state.currentGame.numbers.includes(number)) {
        number = generateRandomNumber(MIN, MAX);
      }
      return number;
    };

    pid = setInterval(() => {
      if (state.currentGame.numbers.length === MAX) {
        clearInterval(pid);
        commit("finishBingo");
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
    state.currentGame.isFinished = false;
  },
  pauseBingo(state) {
    state.currentGame.isRunning = false;
    clearInterval(pid);
  },
  unpauseBingo(state) {
    state.currentGame.isRunning = true;
  },
  addNumber(state, newNumber) {
    state.currentGame.numbers.unshift(newNumber);
  },
  finishBingo(state) {
    state.currentGame.isFinished = true;
    state.currentGame.isStarted = false;
    state.currentGame.isRunning = false;
    state.currentGame.numbers = [];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
