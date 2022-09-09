export const state = () =>({
    task:[]
})

export const mutations = {
    SET_TASK_DATA(state, payload) {
        state.task = payload
    }
}

export const actions = {
    getTask({commit}) {
        return new Promise((resolve, reject) =>{
            this.$axios.get('v1/activities').then((response)=>{
                // console.log(response.data);
                commit('SET_TASK_DATA', response.data)
                resolve()
            })
        })
    }
}