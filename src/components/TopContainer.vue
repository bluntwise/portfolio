<script setup>
import NavBar from './NavBar.vue';
import PhotoComponent from './PhotoComponent.vue';
</script>   

<template>
    <div class="top-container">
        <PhotoComponent></PhotoComponent>
        <nav-bar></nav-bar>
    </div>
</template>


<style scoped>
.top-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
}


</style>