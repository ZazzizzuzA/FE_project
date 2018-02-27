<template lang="pug">
	
    div.block__profile#profile
        div.profile_photo
            img#imgimg(src="assets/img/E-T.jpg" alt="photo")
            a.profile_link(type="button" href="https://github.com/ZazzizzuzA/FE_project" target="_blink") {{link.text}}        
        div.profile_info
            h3 {{name}} {{soname}}
            p.profile_location {{location}}
            p.profile_job {{job}}            
            div.profile_questions
                p.profile_facts(v-for="fact in info") {{fact.title}}
            div.profile_answers
                p.profile_facts(v-for="answer in answers" v-if="answer.show" @click="answer.show = !answer.show" ) {{answer.text}}
                input(v-else="answer.show" @keyup.13="answer.show = !answer.show" v-model="answer.text")
</template>

<script>
export default {
    data() {
        return {
            name: "Mykhailo",
            soname: "Pylypenko",
            location: "Ukraine, Kyiv",
            job: "Front-end Developer",
            link: {
                text: "This project on GitHub",
            },
            info: [ 
                {
                    title: "Nickname:",
                },
                {
                    title: "Age:",
                },
                {
                    title: "Birthday:",
                },
                {
                    title: "Phone:",
                },
                {
                    title: "Favorite movies:",
                },
                {
                    title: "E-mail:",
                },
                {
                    title: "Site:",
                },

            ],
            answers: [
                {
                    text: "Pomidorka",
                    show: true
                },
                {
                    text: "28",
                    show: true                    
                },
                {
                    text: "XVIII.I.XIXXC",
                    show: true                    
                },
                {
                    text: "+38-050-821-41-40",
                    show: true                    
                },
                {
                    text: "\"Brave heart\", \"Freinds\", \"Mr. Nobody\"",
                    show: true                    
                },
                {
                    text: "musicvyp@gmail.com",
                    show: true                    
                },
                {
                    text: "-",
                    show: true                    
                }
            ]
        }
    },
    methods: {
        changeInfo: function(value) {
            this.show = !this.show
        }
    },
    mounted() {
        
    }
}
	
</script>

<style lang="scss">
@import '../styles/_var.scss';
@import '../styles/_reset.scss';

@font-face {
    font-family: 'Fredericka the Great';
    font-style: normal;
    font-weight: 400;
    src: url('../../build/assets/fonts/FrederickatheGreat-Regular.ttf');
}
@font-face {
    font-family: 'Special Elite';
    font-style: normal;
    font-weight: 400;
    src: url('../../build/assets/fonts/SpecialElite-Regular.ttf');
}
@font-face {
    font-family: 'LibreBaskerville-Regular';
    font-style: normal;
    font-weight: 400;
    src: url('../../build/assets/fonts/LibreBaskerville-Regular.ttf');
}


.block__profile{
    display: flex;
    flex-flow: row nowrap;
    width: 70%;
    border-radius: 10px;
    margin: auto;
    background-image: url("https://image.freepik.com/free-vector/grey-square-pattern-background-vector-illustration_1164-1350.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    .profile_photo{
        text-align: center;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        width: 40%;
        align-items: center;
        img{
            width: 250px;
            height: 200px;
            border-radius: 50%;
        }
        a{
            @include padding(10px, 10px);
            text-decoration: none;
            width: 35%;
            border-radius: 5px;
            color: #EEEEEE;
            background-color: #616161;
            letter-spacing: 1px;
            box-shadow: 7px 7px 10px 2px #424242;
            font-family: 'Fredericka the Great', cursive;
        }
    }
    .profile_info{
        @include padding(10px, 10px);
        display: flex;
        flex-flow: row wrap;
        box-shadow: -5px 0px 4px #90A4AE;
        flex: 1 0 60%;    
        box-sizing: border-box;
            
        h3{
            @include margin(0px, 0px);
            color: #424242;
            letter-spacing: 2px;
            font-family: 'Fredericka the Great', cursive;
            font-size: 1.5em;
            flex: 1 0 100%;
            text-shadow: 10px 0px 50px #424242;
            cursor: default;
            
        }        
        .profile_location{
            font-size: 0.6em;
            font-weight: 400;
            margin: 0px 0px 0px 0px;
            flex: 1 0 100%;
            cursor: default;
            font-family: 'Libre Baskerville', serif;

        }
        .profile_job{
            font-size: 0.9em;
            margin: 0px 0px 10px 0px;
            flex: 1 0 100%;
            cursor: default;
            font-family: 'Libre Baskerville', serif;
            
        }
        .profile_questions{
            display: flex;
            flex-flow: column wrap;
            box-sizing: border-box;
            width: 30%;
            font-family: 'Special Elite', cursive;
            font-size: 1.2em;
            p {
                margin: 0px 0px 20px 0px;
                cursor: default;
                text-shadow: 3px 2px 3px;
            }
        }
        .profile_answers {
            @include padding(0px, 10px);
            display: flex;
            flex-flow: column wrap;
            box-sizing: border-box;
            width: 70%;
            border-left: 1px groove rgba(165, 214, 167, 0.356);
            font-family: 'Special Elite', cursive;
            font-size: 1.2em;
            p {
                margin: 0px 0px 20px 0px;
                cursor: default;
            }
            p:hover{
                cursor: pointer;
                text-decoration: underline;
                
            }
            input{
                height: 18px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>