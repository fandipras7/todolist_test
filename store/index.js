export const state = () => ({
    isAuth: false,
    api_token: null
})

export const mutations = {

    SET_IS_AUTH(state, payload) {
        state.isAuth = payload
    },

    SET_API_TOKEN(state, payload) {
        state.api_token = payload
    }
}

export const actions = {
    nuxtServerInit({ commit }, context) {
        commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
        if (state.isAuth) {
            var token = context.app.$auth.$storage._state['_token.local'].split(' ')[1]
            commit('SET_API_TOKEN', token)
        }
    }
}