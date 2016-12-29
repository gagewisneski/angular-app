(function(){
  "use stricy";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.messages = [
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

    $scope.addMessage = function(text) {
      if (text) {
        var message = {
          text: text,
          completed: false
        };
        $scope.messages.push(message);
        $scope.newMessageText = null;
      }
    }

    $scope.completedMessage = function(message) {
      message.completed = !message.completed;
      $scope.isIncomplete();
    }

    // $scope.clearMessage = function(index) {
    //   $scope.messages.splice(index, 1);
    // }

    // $scope.isPositive = function(message) {
      // if (message.indexOf("bad") == -1) {
      //   return true;
      // }
      // else {
      //   return false;
      // }

    //   return (message.indexOf("bad") == -1);
    // }

    $scope.incompleteMessages = $scope.messages;

    $scope.isIncomplete = function() {
      $scope.incompleteMessages = [];
      for (var i = 0; i < $scope.messages.length; i++) {
        var message = $scope.messages[i];

        if (message.completed === false) {
          $scope.incompleteMessages.push(message);
        }
      }
    }

    $scope.removeMessages = function() {
      $scope.incomplete = []
      for (var i = 0; i < $scope.messages.length; i++) {
        var message = $scope.messages[i];

        if (message.completed === false) {
          $scope.incomplete.push(message);
        }
      }
      $scope.messages = $scope.incomplete;
    }




    window.$scope = $scope;

  });

})();