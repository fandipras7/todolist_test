<template>
    <div class="container mt-5">
        <h3 class="text-center">Edit Task</h3>
        <div class="row justify-content-center">
            <div class="card mb-3" style="width: 70%">
                <div class="card-header">
                    <h4 class="card-title"></h4>
                </div>
                <div class="card-body">
                    <form class="mb-3">
                        <div class="form-group mr-3 mb-0">
                            <input type="text" class="form-control" id="formGroupExampleInput" v-model="task.title" />
                        </div>
                        <div class="form-group mr-3 mb-0">
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                v-model="task.description" />
                        </div>
                        <div class="form-group mr-3 mb-0">
                            <input v-model="task.date" type="date" class="form-control" id="formGroupExampleInput" />
                        </div>
                        <div class="form-group mr-3 mb-0">
                            <input v-model="task.time" type="time" class="form-control" id="formGroupExampleInput" />
                        </div>
                    </form>
                </div>
                <button @click="onSaveEdit" type="button" class="btn btn-primary mt-3 mr-3">
                    Save
                </button>
                <button @click="onCancel" type="button" class="btn btn-warning mt-3">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        async asyncData({ store, params }) {
            await Promise.all([
                store.dispatch('task/getTaskById', params.id)
            ])
            return
        },

        created() {
            this.task = {
                title: this.taskId.title,
                description: this.taskId.description,
                date: this.taskId.date,
                time: this.taskId.time
            }
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

        computed: {
            ...mapState('task', {
                taskId: state => state.taskId
            })
        },

        methods: {
            ...mapActions('task', ['updateTaskId']),
            onSaveEdit() {
                let data = {
                    id: this.$route.params.id,
                    ...this.task
                }
                this.updateTaskId(data)
                    .then(() => this.$router.push('/'))
            },

            onCancel() {
                this.task = {
                    title: this.taskId.title,
                    description: this.taskId.description,
                    date: this.taskId.date,
                    time: this.taskId.time
                }
            }
        },



    }
</script>