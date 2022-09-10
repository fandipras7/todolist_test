export const state = () =>({
    task:[],
    taskId:[]
})

export const mutations = {
    SET_TASK_DATA(state, payload) {
        state.task = payload
    },

    SET_TASK_ID(state, payload){
        state.taskId = payload
    }
}

export const actions = {
    getTask({commit, dispatch}) {
        return new Promise((resolve, reject) =>{
            this.$axios.get('v1/activities').then((response)=>{
                // console.log(response.data);
                commit('SET_TASK_DATA', response.data)
                resolve()
            })
        })
    },

    async getTaskById({commit}, payload) {
        try {
          const response =  await this.$axios.get(`v1/activities/${payload}`)
          commit('SET_TASK_ID', response.data);
        } catch (e) {
            console.log(e);
            alert(e.response.data.message)
        }
    },

    async addNewTask({dispatch}, payload) {
       try {
        await this.$axios.post('v1/activities', payload)
        dispatch('getTask')
        alert('Berhasil Menambah kegiatan')
       } catch (error) {
        alert(error.response.data.message);
       }

    },

    async updateTaskId({dispatch}, payload) {
        try {
            await this.$axios.put(`v1/activities/${payload.id}`, payload)
            dispatch('getTask')
            alert('Berhasil Update kegiatan')
        } catch (error) {
            alert(error.response.data.message)
        }
    },

    async deleteTask({dispatch}, payload) {
        try {
         await this.$axios.delete(`v1/activities/${payload}`)
         dispatch('getTask')
         alert('Berhasil Menghapus data')
        } catch (error) {
         alert(e.response.data.message);
        }
 
     }
}