const app = new Vue(
    {
        el: "#root",
        data:{
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],

            newTodo : ""
        },

        methods: {
            removeElement: function (todoIndex) {
              this.todos.splice(todoIndex, 1);
            },

            puschInTodos: function(todoElementText) {
                if(todoElementText != '' ){
                    const todoElement = {
                        text: todoElementText,
                        done: false
                    }
                    this.todos.push(todoElement);
                    this.newTodo = ""
                }
            }
          }
    }
)