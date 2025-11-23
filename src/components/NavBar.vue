<script></script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>

    li{
        font-family: 'Instrument Sans', sans-serif;
        list-style-type: none;  
        border: 2px solid var(--color-primary);
        background-color: var(--color-secondary);
        border-radius: 2em;
        overflow: hidden;
    }

    .nav-links{
        display: flex;
        gap: 1.5em;
    }
    
    .nav-links a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 0.2em 2em;
        font-size: 1em;
    }


    .nav-links a:hover,
    .nav-links a.router-link-exact-active {
        background-color: var(--color-primary);
        color: var(--color-secondary);
    }
    

</style>