<template>
    <div>
        <div class="c-todo">
          
                <img @click="deleteTodo(todo)" class="c-minus" :src="require(`@/assets/icons/minus.svg`)" alt="cross icon" />
                <div class="c-action">{{todo.action}}</div>
           
        <div class="c-time">
                @ {{todo.timeOfAction}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:  ['todo'],
    

    data(){
        return{
            id: this.todo.id,
        }

    },

    methods:{
        async deleteTodo(todo){
            console.log(todo.id);
            await this.$store.dispatch('deleteTodo', todo) ;
            await this.$store.dispatch('getTodos');       
            }
    }

}


</script>

<style lang="scss" scoped>

@import '@/assets/style/components/todo';

</style>
