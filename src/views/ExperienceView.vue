<script setup>
import TimeLineComponent from '@/components/TimeLineComponent.vue';
import orangeLogo from '@/assets/images/orange.png'
import ubsLogo from '@/assets/images/ubs.png'
import enssatLogo from '@/assets/images/enssat.png'
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
            logo : enssatLogo
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
            logo: ubsLogo,
            
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
            logo : orangeLogo,
            
        },
    
        
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
