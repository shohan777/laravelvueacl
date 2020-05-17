<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Roles</h1>
        </div>

        <div class="row">
            <div class="col-xl-12 col-md-12 mb-12">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Roles</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="role in roles">
                                            <td>{{ role.name }}</td>
                                            <td>
                                                <button class="btn btn-info">Edit</button>
                                                <button class="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row no-gutters align-items-center">
                            <router-link :to="{ path: '/role-create' }" class="btn btn-primary">
                                <span>Create Role</span>
                            </router-link>
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
                roles: {}
            }
        },
        created() {
            this.getRoles();
        },
        methods: {
            getRoles() {
                axios.get('api/roles/')
                    .then(({data}) => {
                        this.roles = data;
                    });
            },
        }
    }
</script>
