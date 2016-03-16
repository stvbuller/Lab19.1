angular.module("todoApp", [])
  .controller("TodoListController", function(){
    var todoList = this;
    todoList.todoItems = [
      {name: "My Homework", done: false},
      {name: "My Laundry", done: true},
      {name: "My first thing", done: false},
      {name: "My second thing", done: false},
    ]
    todoList.addTodo = function() {
      todoList.todoItems.push(
        {name: todoList.todoText, done: false}
      )
      todoList.todoText = ""
      console.log("this works");
    }
    todoList.archive = function() {
      var oldTodos = todoList.todoItems;
      todoList.todoItems = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todoItems.push(todo);
      });
      console.log("this achived, not really")
    }
    todoList.remaining = function() {
      var notCompletedCount = 0;
      angular.forEach(todoList.todoItems, function(todo) {
        notCompletedCount += todo.done ? 0 :1;
      });
      return notCompletedCount;
      console.log("remaining ran")
    }
  });
