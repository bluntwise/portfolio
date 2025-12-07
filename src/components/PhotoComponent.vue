<script setup></script>

<template>
  <div class="photo-container">
    <img src="@/assets/images/AlanPresentation.png" class="photo"/>
    <span>Alan Dely</span>
  </div>
</template>

<style scoped>

.photo-container{
    display: flex;
    align-items: center;
    gap: 2em;
}

.photo {
  width: 7em;
  height: 7em;
  object-fit: cover;
  border-radius: 50%;
}

span{
    font-family: 'Instrument Sans', sans-serif;
    text-align: center;
    font-size: 1.5em;
    
}

</style>