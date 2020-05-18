<template>

    <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">

                <div class="container-fluid">

                    <!-- Topbar -->
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        <!-- Sidebar Toggle (Topbar) -->
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>

                        <!-- Topbar Navbar -->
                        <ul class="navbar-nav ml-auto">

                            <div class="">
                                <a class="dropdown-item" href="/logout" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    Logout
                                </a>

                                <form id="logout-form" action="/logout" method="POST"
                                    style="display: none;">
                                    <input type="hidden" name="_token" :value="csrf">
                                </form>
                            </div>

                        </ul>

                    </nav>
                    <!-- End of Topbar -->

                    <Content />

                </div>
            </div>

            <Footer />

        </div>

    </div>
</template>

<script>
    import Sidebar from './Sidebar';
    import Content from './Content';
    import Footer from './Footer';
    export default {
        name: 'Layout',
        components: {
            Sidebar,
            Content,
            Footer
        },
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        }
    }

</script>
