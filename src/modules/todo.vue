
<template lang="pug">

    div#toDoList
        input(type="text" v-model="todo" @keyup.13="addDeal")
        button(@click="addDeal") {{messageButton}}
        h4 {{messageDeal}}
        ul
            li(v-for="deal in deals" :class="{'deal-done': deal.status}" v-if="deal.show") {{deal.text}}
                input(type="checkbox" v-model="deal.mark" @click="deal.status = !deal.status") 
                    
                button(@click="deal.show = !deal.show")
                    <i class="fa fa-times" aria-hidden="true"></i>       

</template>

<script>
export default {
	
    data() {
    	return {
	        messageButton: "Добавить дело",
	        messageDeal: "Дела на \"бумаге\"",
	        todo: "Do something",
	        deals: [{
	                text: "Доделать кликер с \"оттяжечкой\"",
	                status: true,
	                mark: "checked",
	                show: true
	            },
	            {
	                text: "Попрыгать от радости",
	                status: true,
	                mark: "checked",
	                show: true
	            },
	            {
	                text: "Сделать to-Do-List",
	                status: false,
	                mark: "",
	                show: true
	            }
	        ]
	    }
	},
    methods: {
        addDeal: function() {
            this.deals.push({
                text: this.todo,
                status: false,
                mark: "",
                show: true
            })
        }
    }
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
@import '../styles/_reset.scss';

	.deal-done {
    text-decoration: line-through;
    color: $indigo;
    opacity: 0.6;
}

#toDoList {
    @include padding(15px, 15px);
    @include margin(15px, 0px);
    background-color: $bg_list;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1.4em;
    ul {
        list-style-type: none;
        column-width: 200px;
        column-count: 3;
        column-gap: normal;
        column-rule: 1px solid #ccc;
        font-size: 20px;
        button{
            margin-left: 15px;
            font-size: 0.8em;
            border-style: none;
            background-color: $warn_red;
            color: $first_white;
            border-radius: 3px;
        }   
    }
}

</style>