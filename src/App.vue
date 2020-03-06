<template>
    <div id="app">
        <StarterNavbar></StarterNavbar>

        <div>
            <router-view/>
        </div>

        <router-view name="footer"/>
    </div>
</template>
<script>
    import StarterNavbar from './layout/StarterNavbar';
    export default {
        components: {
            StarterNavbar,
        },
    }
</script>

