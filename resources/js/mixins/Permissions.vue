<script>
  export default {
    methods: {
      can(permissionName) {
        return window.roles.indexOf(permissionName) !== -1;

      },
    },
  };
</script>
