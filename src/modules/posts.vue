<template lang="pug">

  div.block__main_content#content 
    div.block__small( v-for="post in posts" )
      h3 {{post.title}}
      p {{post.body}}
  
</template>

<script>

export default {
  data () {
    return {
      endpoint: 'https://jsonplaceholder.typicode.com/posts',
      posts: []
    }
  },
  methods: {
    getPosts: function() {
      this.$http.get(this.endpoint).then( function(response) {
        this.posts = response.data
        // console.log(response)
      }, function(error) {
        console.log("Something wrong")
      })
    }
  },
  created: function() {
    this.getPosts()
  },
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
@import '../styles/_reset.scss';


.block__main_content {
        @include padding(20px, 0px);
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        align-content: space-around;
        justify-content: space-between;
        div {
            @include margin(10px, 0px);
            border: 1px solid rgb(0, 34, 128);
            text-align: center;
        }
        .block__small {
            color: $first_white;
            @include padding(10px, 10px);
            background: $grad_red;
            width: 30%;
        }
        .block__long {
            @include padding(10px, 10px);
            flex: 1 0 100%;
            background-color: $lime;
            box-sizing: border-box;
        }
    }

</style>

