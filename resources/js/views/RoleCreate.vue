<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Role Create</h1>
        </div>

        <div class="row">
            <div class="col-xl-12 col-md-12 mb-12">
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
                                <div v-if="permissions" class="pl-4">
                                    <div v-for="(permission, index) in permissions" class="form-group">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input"
                                                v-model="fields.permissions" :value="permission.id">{{ permission.name }}
                                        </label>
                                    </div>
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
                fields: {
                    name: '',
                    permissions: []
                },
                permissions: {},
                errors: {},
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        created() {
            this.getPermissions();
        },
        methods: {
            submit() {
                this.errors = {};
                axios.post('api/roles', this.fields).then(response => {
                    this.$router.push('/roles')

                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};

                    }
                });
            },
            getPermissions() {

                axios.get('api/permissions/')
                    .then(({
                        data
                    }) => {
                        this.permissions = data;
                    });
            },
        }
    }

</script>
