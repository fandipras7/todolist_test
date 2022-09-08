<template>
  <div>
    <Navbar />
    <div class="app-container d-flex align-items-center justify-content-center flex-column">
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
              <th>No.</th>
              <th>Todo item</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>
                cek
              </td>
              <td></td>
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
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',

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