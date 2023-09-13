console.log("app is running");


// create module 
const app = angular.module('myApp', []);

// create controller on this module
app.controller('todoController', ['$scope', function($scope) {

    let scope = $scope;

    scope.todoList = [];
    scope.count = 0;

    scope.display = (itemName) => {
        
        scope.count = scope.count+1;
        scope.todoList.push({
            id: scope.count,
            name: itemName
        });

        // resetting input in inputbox
        scope.itemName = '';

        console.log(scope.todoList);
    }

    
    scope.delete = (itemId) => {
        // find the item in todoList
        let itemToDelete = scope.todoList.find(function(item){
            return item.id === itemId;
        });

        // if item is found
        if(itemToDelete) {

            // get index of item and remove it
            let index = scope.todoList.indexOf(itemToDelete);
            if(index !== -1) {
                scope.todoList.splice(index, 1);
            }
        }

        console.log(scope.todoList);
    }
}]);



