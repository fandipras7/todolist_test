export const state = () =>({
    task:[]
})

export const mutations = {
    SET_TASK_DATA(state, payload) {
        state.task = payload
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

    async addNewTask({dispatch}, payload) {
       try {
        await this.$axios.post('v1/activities', payload)
        dispatch('getTask')
        alert('Berhasil Menambah kegiatan')
       } catch (error) {
        alert('Gagal menambah data');
       }

    },

    async deleteTask({dispatch}, payload) {
        try {
         await this.$axios.delete(`v1/activities/${payload}`)
         dispatch('getTask')
         alert('Berhasil Menghapus data')
        } catch (error) {
         alert('Gagal menghapus data');
        }
 
     }
}