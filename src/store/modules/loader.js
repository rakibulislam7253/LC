export const loader = {
    namespaced: true,
    state: {
        loadingStatus: false,
        requestsPending: 0
    },
    actions: {
        show({ commit }) {
            commit('show');
        },
        hide({ commit }) {
            commit('hide');
        },
        pending({ commit }) {
            commit('pending');
        },
        done({ commit }) {
            commit('done');
        }
    },
    mutations: {
        show(state) {
            state.loadingStatus = true;
        },
        hide(state) {
            state.loadingStatus = false;
        },
        pending(state) {
            if (state.requestsPending === 0) {
                this.commit('loader/show');
            }

            state.requestsPending++;
        },
        done(state) {
            if (state.requestsPending >= 1) {
                state.requestsPending--;
            }

            if (state.requestsPending <= 0) {
                this.commit('loader/hide');
            }
        }
    }
};
