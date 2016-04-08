angular.module('main.controllers', ['main.models'])

  .controller('MainCtrl', ['$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
  }])
  .controller('Students1Ctrl', ['$routeParams', function ($scope, $routeParams, account) {
    this.name = "BookCtrl";
    this.params = $routeParams;
    this.students = 'xxx';
    
    
    
    
    
    
  }])
  .controller('StudentsCtrl', function ($scope, student){
    $scope.title = 'Alumnos';
    
    var query = student.get(function() {
      $scope.students = query.student;    
    });
  })
  .controller('ChapterCtrl', ['$routeParams', function ($routeParams) {
    this.name = "ChapterCtrl";
    this.params = $routeParams;
  }]);