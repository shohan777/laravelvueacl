import Vue from "vue";
import VueRouter from "vue-router";

import A from "../views/A.vue";
import Permissions from "../views/Permissions.vue";
import PermissionsCreate from "../views/PermissionsCreate.vue";
import Roles from "../views/Roles.vue";
import RoleCreate from "../views/RoleCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "A",
    component: A
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
    path: "/roles",
    name: "Roles",
    component: Roles
  },
  {
    path: "/role-create",
    name: "RoleCreate",
    component: RoleCreate
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
