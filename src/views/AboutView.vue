

<script setup>
    import enssatLogo from '@/assets/images/enssat.png';
    import orangeLogo from '@/assets/images/orange.png';

    import GridImages from '@/components/GridImages.vue';

    import pythonLogo from '@/assets/images/py.png';
    import javascriptLogo from '@/assets/images/js.png';
    import javaLogo from '@/assets/images/java.png';
    import vueLogo from '@/assets/images/vue.png';
    import kibanaLogo from '@/assets/images/kibana.png';
    import elasticLogo from '@/assets/images/elastic.svg';
</script>
<template>

    <div class="about-view">
        
        <div class="about-sections">
            <div class="title-about">
                <div class="title-info">
                <span class="hi">Hi, I'm Alan DELY.</span>
                </div>
            </div>
            <div class="first-about">
                <div class="first-info">
                    <p>Passionné depuis mes 10 ans par l’informatique, j’ai toujours eu une curiosité naturelle pour ce domaine tout seul puis avec l’école. Depuis je n’ai cessé d’agrandir mes connaissances et j’aimerais en faire mon métier.</p>
                </div>
                <div class="binary-box"><span>0101100</span><span>1010010</span></div>
            </div>
            <div class="second-about">
                <img :src="enssatLogo" class="enssat-logo" />
                <div class="second-info">
                    <p>Je suis étudiant à l’Enssat à Lannion en filière informatique en apprentissage. J’apprécie développer de nouveaux projets dans ce domaine, c’est donc pour cela que je me suis tourné vers l’apprentissage. </p>
                </div>
            </div>
            <div class="third-about">
                <div class="third-info">
                    <p>Je suis étudiant à l’Enssat à Lannion en filière informatique en apprentissage. J’apprécie développer de nouveaux projets dans ce domaine, c’est donc pour cela que je me suis tourné vers l’apprentissage. </p>
                </div>
                <img :src="orangeLogo" class="orange-logo" />
            </div>
            <div class="grid-section">
                <GridImages :items="[
                { id: 1, image: javascriptLogo},
                { id: 2, image: pythonLogo},
                { id: 3, image: javaLogo},
                { id: 4, image: vueLogo},
                { id: 5, image: kibanaLogo},
                { id: 6, image: elasticLogo}
            ]" :title="'My Stack'" />
            </div>
            
            
        </div>
    </div>


</template>


<style scoped>
.about-view{

    
}

.hi{
    font-family: 'Advent Pro', sans-serif;
    color : var(--color-primary);
    font-weight: 500;
    font-size: 3em;
    margin: 0 1em;
}

.about-sections{
    display: flex;
    flex-direction: column;
    gap: 4em;

}

.title-about{
    display: flex;
    align-items: center;
    
    margin: 0 4em;
}

.first-about{
    display: flex; 
    align-items: center;
    justify-content: space-between;
    margin: 0 4em;
}

.first-info{
    width: 60%;
    
    & p{
        font-family: 'Instrument Sans', sans-serif;
        font-size: 1.2em;
        color: var(--color-primary);
        text-align: justify;
    }  
}

.binary-box{
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 3.5em;
    color: var(--color-primary);
    width : 4em; 
    height: 4em;
}


.second-about{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 4em;
}

.second-info{
    width: 70%;
    
    & p{
        font-family: 'Instrument Sans', sans-serif;
        font-size: 1.2em;
        color: var(--color-primary);
        text-align: justify;
    }  
}

.enssat-logo{
    width: 20%;
}

.third-about{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 4em;
}

.third-info{
    width: 70%;
    
    & p{
        font-family: 'Instrument Sans', sans-serif;
        font-size: 1.2em;
        color: var(--color-primary);
        text-align: justify;
    }  
}

.orange-logo{
    width: 15%;
}

.grid-section{
    margin: 0 4em;
}


</style>