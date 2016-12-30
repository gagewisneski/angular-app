(function(){
  "use stricy";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.tasks = [
      {
        text: "Hello!",
        completed: false
      },
      {
        text: "Hey!",
        completed: false
      },
      {
        text: "Hola!",
        completed: false
      }
    ];

    $scope.addTask = function(text) {
      if (text) {
        var task = {
          text: text,
          completed: false
        };
        $scope.tasks.push(task);
        $scope.newTaskText = null;
      }
    }

    $scope.completedTask = function(task) {
      task.completed = !task.completed;
      $scope.isIncomplete();
    }

    // $scope.clearTask = function(index) {
    //   $scope.tasks.splice(index, 1);
    // }

    // $scope.isPositive = function(task) {
      // if (task.indexOf("bad") == -1) {
      //   return true;
      // }
      // else {
      //   return false;
      // }

    //   return (task.indexOf("bad") == -1);
    // }

    $scope.incompleteTasks = $scope.task;

    $scope.isIncomplete = function() {
      $scope.incompleteTasks = [];
      for (var i = 0; i < $scope.tasks.length; i++) {
        var task = $scope.tasks[i];

        if (task.completed === false) {
          $scope.incompleteTasks.push(task);
        }
      }
    }

    $scope.removeTasks = function() {
      $scope.incomplete = []
      for (var i = 0; i < $scope.tasks.length; i++) {
        var task = $scope.tasks[i];

        if (task.completed === false) {
          $scope.incomplete.push(task);
        }
      }
      $scope.tasks = $scope.incomplete;
    }


    window.$scope = $scope;

  });

})();