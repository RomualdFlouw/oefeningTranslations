<template>
<div>
    <container>
  <div>
        <router-link to="/">
        <img class="c-cross" :src="require(`@/assets/icons/cross.svg`)" alt="cross icon" />

                    </router-link>
        <h3> on <span class="c-underline"> {{days[date.getDay()]}} {{date.getDate()}}
            {{months[date.getMonth()]}}</span>
            </h3>
        <h1 class="c-margin36px">{{$t("TITLE-OVERVIEW")}}</h1>


        <div class="c-todo ">
          
                <img @click="save" class="c-minus" :src="require(`@/assets/icons/plus.svg`)" alt="cross icon" />
                <div ><input class="c-action__input js-input-action" v-model="todo.action" placeholder="..." required/></div>
           
        <div class="c-time">
                @ <input class="c-time__input js-input-time" type="time" v-model="todo.timeOfAction" required/>
            </div>
        
        </div>

        <div v-for="(todo,idx) in todos" :key="idx">
          <to-do :todo="todo" />
        </div>
        <router-link to="/settings">{{$t("TITLE-SETTINGS")}}</router-link>
  </div>
    </container>
</div>
</template>

<script>
import Container from "@/components/layout/Container";
import ToDo from "@/components/layout/Todo";
import { isNullOrUndefined } from 'util';

export default {
  name: 'overview',
  components: {
    Container,
    ToDo
  },

    data(){
        return{
            todo:null,
            date: new Date(),
            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            months: ['January','February','March','April','May','June','July','August','September','October','November','December'],   
        }
    },

    mounted(){
        this.date = new Date();
        this.date.setDate(this.date.getDate()+1);
        this.$store.dispatch('getTodos');       
    },

      created(){

          if(this.$route.params.todo) {
            this.todo = this.$route.params.todo;
          } else {
            this.todo = { action:'', timeOfAction:'' };
        }
  },

    computed: {
        todos(){
            return this.$store.state.toDo.todos;
        }
    },

    methods:{
        async save(){
          if( this.todo.action.trim() != "" && this.todo.timeOfAction !="" ){

          console.log(this.todo.action);
          console.log(this.todo.timeOfAction)
            this.todo.date = new Date();
            await this.$store.dispatch('saveTodo', this.todo)
            await this.$store.dispatch('getTodos');
            console.log("toegevoegd")
            console.log(" de text " +document.querySelector(".js-input-action").value);
            
            document.querySelector(".js-input-action").value ="";
            document.querySelector(".js-input-time").value ="";
            this.todo.action ="";
            this.todo.timeOfAction = "";
      
          }
        },


    }
  
}

</script>

<style lang="scss" scoped>

@import '@/assets/style/components/overview';
@import '@/assets/style/components/todo'

</style>