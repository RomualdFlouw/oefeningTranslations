

import idb from '@/utils/idb';


export default({

    state:{
        todos:[]
    },

    mutations:{

    },

    actions:{

        async getTodos(context) {
            context.state.todos = [];
            let todos = await idb.getTodos();
            todos.forEach(c => {
              context.state.todos.push(c);
            });

            function compare(a,b){
              if(a.timeOfAction<b.timeOfAction){
                return -1;
              }
              if(a.timeOfAction> b.timeOfAction){
                return 1;
              }
              return 0;
            }

            context.state.todos = context.state.todos.sort(compare);

          },

          async saveTodo(context,todo) {
            await idb.saveTodo(todo);
          },

          async deleteTodo(context,todo){
            console.log('delete ' + todo.id)
            await idb.deleteTodo(todo);
          }
    },
})
