import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Permissions from "../views/Permissions.vue";
import PermissionsCreate from "../views/PermissionsCreate.vue";
import Roles from "../views/Roles.vue";
import RoleCreate from "../views/RoleCreate.vue";
import Users from "../views/Users.vue";
import UserCreate from "../views/UserCreate.vue";
import UserEdit from "../views/UserEdit.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/permissions",
        name: "Permissions",
        component: Permissions
    },
    {
        path: "/permission-create",
        name: "PermissionsCreate",
        component: PermissionsCreate
    },
    {
        path: "/role-create",
        name: "RoleCreate",
        component: RoleCreate
    },
    {
        path: "/roles",
        name: "Roles",
        component: Roles
    },
    {
        path: "/users",
        name: "Users",
        component: Users
    },
    {
        path: "/user-create",
        name: "UserCreate",
        component: UserCreate
    },
    {
        path: "/user-edit/:id",
        name: "UserEdit",
        component: UserEdit,
        params: true
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
