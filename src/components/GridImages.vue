<template>
    <div class="grid-component">
        <span class="title">{{ props.title }}</span>
        <div class="grid-images">
            <div class="grid-item" v-for="item in items" :key="item.id">
                <img :src="item.image" class="img" />
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
        title: {
        type: String,
        required: false,
        default: "My Stack"
    }
    })
</script>

<style scoped>
.grid-images {
    display: flex;
    flex-wrap: wrap;
    gap : 4em;
    width: 50%
}

.img{
    width: 6em;
}

.grid-component {
    display: flex;
    flex-direction: column;
    gap: 4em;
}


.title{
    font-family: 'Advent Pro', sans-serif;
    font-size: 4em;
    color: var(--color-primary);
}
</style>