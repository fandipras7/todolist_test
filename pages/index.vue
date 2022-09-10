<template>
  <div>
    <Navbar />
    <div v-if="isAuth" class="container mt-5">
      <form class="mb-3">
        <div class="form-group mr-3 mb-0">
          <input v-model="task.title" type="text" class="form-control" id="formGroupExampleInput"
            placeholder="Masukan Kegiatan" />
        </div>
        <div class="form-group mr-3 mb-0">
          <input v-model="task.description" type="text" class="form-control" id="formGroupExampleInput"
            placeholder="Tambahkan Deskripsi" />
        </div>
        <div class="form-group mr-3 mb-0">
          <input v-model="task.date" type="date" class="form-control" id="formGroupExampleInput" />
        </div>
        <div class="form-group mr-3 mb-0">
          <input v-model="task.time" type="time" class="form-control" id="formGroupExampleInput" />
        </div>
        <button type="button" @click="addData" class="btn btn-primary mt-3 mr-3">
          Save
        </button>
        <button @click="getTask" type="button" class="btn btn-warning mt-3">
          Get Tasks
        </button>
      </form>
      <div class="table-wrapper">
        <table class="table table-hover table-bordered">
          <thead class="table-dark">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tasks">
              <td>{{item.id}}</td>
              <td>
                {{item.title}}
              </td>
              <td>{{item.description}}</td>
              <td>{{item.date}}</td>
              <td>{{item.time}}</td>
              <td>
                <nuxt-link :to="{name: 'edit-id', params: {id: item.id}}"> <button class="btn btn-danger">
                    Edit
                  </button></nuxt-link>
                <button type="button" @click="deleteData(item)" class="btn btn-primary">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="container">
      <h1 class="centerText">Harap Login Terlebih Dahulu</h1>
    </div>
  </div>
  </div>
</template>

<style>
  .centerText {
    margin-top: 250px;
    margin-left: 300px;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  export default {

    async asyncData({ store }) {
      if (store.state.auth.loggedIn) {
        await Promise.all([
          store.dispatch('task/getTask')
        ])
        return
      }
      return
    },


    name: 'IndexPage',
    computed: {
      ...mapState(['isAuth']),
      ...mapState('task', {
        tasks: state => state.task
      })
    },
    data() {
      return {
        task: {
          title: '',
          description: '',
          date: '',
          time: ''
        },
        errors: null
      }
    },

    methods: {
      ...mapActions('task', ['getTask', 'addNewTask', 'deleteTask']),
      addData() {
        this.addNewTask(this.task)
        this.task = {};
        // try {
        //   const data = this.task;
        //   await this.$axios.post('v1/activities', data);
        //   alert('Berhasil Menambah data')
        //   // console.log(typeof(data.time));
        //   // console.log(data);
        // } catch (error) {
        //   alert('Gagal Menambah data')
        // }
      },
      deleteData(item) {
        this.deleteTask(item.id)
      }
    },
  }
</script>