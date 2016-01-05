var app = angular.module('pomodoro', [
  'timer'
]);

app.controller('mainCtrl', function($scope){
  
  $scope.initialTime = 1500;
  $scope.timerRunning = false;
  
  $scope.startTime = function(){
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
  };
  
  $scope.stopTime = function(){
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
  };
  
  $scope.resetTime = function(){
    $scope.$broadcast('timer-reset');
  }
  
  $scope.add5Min = function() {
    $scope.$broadcast('timer-add-cd-seconds', 300);
  };
  
});
