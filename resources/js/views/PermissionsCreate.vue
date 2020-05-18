<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Permission Create</h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-xl-4 col-md-4 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <form @submit.prevent="submit" class="user">
                                <input type="hidden" name="_token" :value="csrf">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" name="name" id="name"
                                        v-model="fields.name" />
                                    <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                                </div>

                                <button type="submit" class="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                fields: {},
                errors: {},
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        created() {
            if(!this.can('Admin')) {
                this.$router.push('/');
            }
        },
        methods: {
            submit() {
                this.errors = {};
                axios.post('api/permissions', this.fields).then(response => {
                    this.$router.push('/permissions')

                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};

                    }
                });
            }
        }
    }

</script>
