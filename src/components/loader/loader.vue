<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    name: 'Loader',
    data() {
        return {
            width: 64,
            height: 64,
            loader: 'dots',
            isFullPage: true
        };
    },
    components: {
        Loading
    },
    computed: {
        loadingStatus() {
            return this.$store.state.loader.loadingStatus;
        }
    }
};
</script>

<template>
    <loading :active="loadingStatus" :is-full-page="isFullPage" color="#4d83ff" :width="width" :height="height" :loader="loader" />
</template>
