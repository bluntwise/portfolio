<template>
    <div class="timeline">

    <span class="timeline-title">{{ props.title }}</span>
    <div class="timeline-block">
        <div 
            v-for="(item, index) in props.items"
            :key="index"
            class="timeline-row">

            <div class="timeline-left">
                <span class="year">{{ item.year }}</span>
                <span class="dot"></span>
            </div>
            
            <div class="timeline-content">
                <div class='logo-container'>
                    <img :src="item.logo" alt="logo" class="logo"/>
                </div>
                <div class='text-container'>
                    <span class="title">{{ item.title }}</span>
                    <span class="domain">{{ item.domain }}</span>
                    <ul class="skills">
                        <li v-for="(task, tIndex) in item.tasks" :key="tIndex">{{ task }}</li>
                    </ul>
                </div>
              
                
            </div>
            
        </div>

        
    </div>
</div>
</template>

<script setup>

    const props = defineProps({
        items : {
            type : Array,
            require : true
        },
        title : {
            type : String,
            require : false
        },
        yearStart : {
            type : Number,
            require : false
        }

    })
        
    
</script>

<style scoped>

.timeline-title{
    font-family: 'Advent Pro', sans-serif;
    font-size: 2.8em;
    font-weight: 500;

    color: var(--color-primary);
}

.timeline{
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.timeline-block {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;
    padding-left: 6rem;
}

.start-dot {
    width: 1em;
    height: 1em;
    background: var(--color-primary);
    border-radius: 50%;
    position: absolute;
    left: 3.5rem;
    transform: translateX(-43%);
}


.timeline-block::before {
    content: "";
    position: absolute;
    left: 3.5rem;
    top: 1.5em;
    bottom: 0;
    width: 2px;
    background: #444;

}

.timeline-row {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
}

.timeline-left {
    display: flex;
    align-items: center;
    gap: 0.7rem; 
    width: 6rem; 
    margin-left: -1rem;
}

.timeline-content {
    display: flex;
    gap: 3rem;
    width: 50em;
    
    align-items: center;
}

.logo-container {
    flex-shrink: 0;
}   

.text-container{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.year {
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
    color : var(--color-primary);
    font-weight: 500;
    font-size: 1.2em;
}
.dot {
    width: 1em;
    height: 1em;
    background: #444;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 3.5rem;  
    transform: translateX(-43%);
}
.logo {
    width: 12em;
    margin-top: 1rem;
}

.title{
    font-family: 'Advent Pro', sans-serif;
    font-size: 1.6em;
    font-weight: 600;
    color: var(--color-primary);
}

.domain{
    font-family: 'Instrument Sans', sans-serif;
    font-size: 1.2em;
}

.skills{
    font-family: 'Instrument Sans', sans-serif;
    font-size: 1.1em;
}

.skills li{
    margin: 0.5em;
}
</style>s