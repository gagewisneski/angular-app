(function(){
  "use stricy";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.hey = "Hey!";
    $scope.hola = "Hola!";
    $scope.bye = "Bye!";

    // $scope.messages = ["Hello!", "Hey!", "Hola!", "Bye!"];

    $scope.messages = [
      {
        text: "Hello!",
        rating: 5,
        author: "Me"
      },
      {
        text: "Hey!",
        rating: 4,
        author: "You"
      },
      {
        text: "Hola!",
        rating: 3,
        author: "Them"
      }
    ];


    $scope.addMessage = function(text, rating, author) {
      if (text && rating && author) {
        var message = {
          text: text,
          rating: rating,
          author: author
        };
        $scope.messages.push(message);
        $scope.newMessageText = null;
        $scope.newMessageRating = null;
        $scope.newMessageAuthor = null;
      }
    }

    $scope.clearMessage = function(index) {
      $scope.messages.splice(index, 1);
    }

    $scope.isPositive = function(message) {
      // if (message.indexOf("bad") == -1) {
      //   return true;
      // }
      // else {
      //   return false;
      // }

      return (message.indexOf("bad") == -1);
    }


    window.$scope = $scope;

  });



})();