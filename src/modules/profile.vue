<template lang="pug">
	
    div.block__profile#profile
        div.profile_photo
            img(src="http://images.entertainment.ie/images_content/rectangle/620x372/E-T.jpg" alt="photo")
            
        div.profile_info
            h3 {{name}} {{soname}}
            p.profile_location {{location}}
            ul
                li(v-for="fact in info") 
                    input(v-model="fact.title")
</template>

<script>
export default {
    data() {
        return {
            name: "Mykhailo",
            soname: "Pylypenko",
            location: "Ukraine, Kyiv",
            job: "Front-end Developer",
            info: [ {
                    title: "Age"
                },
                {
                    title: "Education"
                }
            ],
        }
    }
}
	


</script>

<style lang="scss">
@import '../styles/_var.scss';
@import '../styles/_reset.scss';

.block__profile{
    display: flex;
    flex-flow: row nowrap;
    width: 50%;
    border-radius: 10px;
    margin: auto;
    background-color: #c6fff0;
    .profile_photo{
        width: 50%;
        text-align: center;
        img{
            max-width: 75%;
            border-radius: 50%;
        }
    }
    .profile_info{
        @include padding(10px, 10px);
        display: flex;
        flex-flow: column nowrap;
        box-shadow: -5px 0px 4px $green_bg;
        h3{
            @include margin(0px, 0px);
            
        }        
        p{
            display: inline-block;
            font-size: 0.6em;
            font-weight: 400;
            margin: 0px 0px 10px 0px;
        }
        ul{
            list-style-type: none;
        }
    }
}


</style>