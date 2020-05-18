<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">User Create</h1>
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
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                        v-model="fields.email" />
                                    <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" id="password"
                                        v-model="fields.password" />
                                    <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>
                                </div>
                                <div v-if="roles" class="pl-4">
                                    <div v-for="(role) in roles" class="form-group" v-bind:key="role.id">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input"
                                                v-model="fields.roles" :value="role.id">{{ role.name }}
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
                    email: '',
                    password: '',
                    roles: []
                },
                roles: {},
                errors: {},
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        created() {
            if(!this.can('Admin')) {
                this.$router.push('/');
            }
            this.getRoles();
        },
        methods: {
            submit() {
                this.errors = {};
                axios.post('api/users', this.fields).then(response => {
                    this.$router.push('/users')

                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};

                    }
                });
            },
            getRoles() {

                axios.get('api/roles/')
                    .then(({
                        data
                    }) => {
                        this.roles = data;
                    });
            },
        }
    }

</script>
