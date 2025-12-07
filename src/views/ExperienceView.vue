<script setup lang="ts">
import TimeLineComponent from '@/components/TimeLineComponent.vue';

const itemsEducation = [
        {
            year : "Today", 
            title : "Ingénieur par apprentissage",
            domain : "Informatique",
            tasks : [
                "Analyse de données", 
                "Cybersécurité", 
                "Gestion des projets"
            ],
            logo : "portfolio/Enssat_logo.png"
        },
        {
            year: "2024",
            title: "Cycle Universitaire Préparatoire aux Grandes Ecoles",
            domain: "Mathématiques & Informatique",
            tasks: [
                "Programmation Orientée Objet",
                "Structures de Données",
                "Introduction au Web"
            ],
            logo: "portfolio/ubs.png"
        }
        
    ]



const itemsWork = [
        {
            year : "Today", 
            title : "Alternant",
            domain : "Analyse de données",
            tasks : [
                "Traitement de données", 
                "Création de visualisations ", 
                "Gestion des projets"
            ],
            logo : "portfolio/orange.png"
        }
        
    ]


</script>


<template>
    <div class="experience-view">
        <TimeLineComponent :items="itemsEducation" :title="'Education'"></TimeLineComponent>
        <TimeLineComponent :items="itemsWork" :title="'Work'"></TimeLineComponent>
    </div>
</template>


<style scoped>
.experience-view{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7em;
    padding: 2rem;
}
</style>
