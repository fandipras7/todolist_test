<template>
  <div>
    <Navbar />
    <div v-if="isAuth" class="container mt-5">
      <div class="d-flex align-items-center mb-3">
        <div class="form-group mr-3 mb-0">
          <input v-model="task.name" type="text" class="form-control" id="formGroupExampleInput"
            placeholder="Enter a task here" />
        </div>
        <button type="button" class="btn btn-primary mr-3">
          Save
        </button>
        <button type="button" class="btn btn-warning">
          Get Tasks
        </button>
      </div>
      <div class="table-wrapper">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>
                cek
              </td>
              <td>34</td>
              <td>34</td>
              <td>35</td>
              <td>
                <button class="btn btn-danger">
                  Delete
                </button>
                <button class="btn btn-success">
                  Finished
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
  export default {
    name: 'IndexPage',
    computed: {
      ...mapState(['isAuth'])
    },
    data() {
      return {
        task: {
          name: '',
        },
        errors: null
      }
    },
  }
</script>