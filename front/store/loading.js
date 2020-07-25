export default new Vuex.Store({
  state: {
    loading: {
      processing: false
    }
  },
  mutations: {
    [START_PROCESS]({ loading }) {
      loading.processing = true;
    },
    [END_PROCESS]({ loading }) {
      setTimeout(() => {
        loading.processing = false;
      }, 300);
    }
  }
});