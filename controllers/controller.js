angular.module('main.controllers', ['main.models', 'main.directives'])

  .controller('MainCtrl', function ($scope, $route, $routeParams, $location) {
      
      
  })
  
  .controller('StudentsCtrl', function ($scope, student) {
    $scope.title = 'Catalogo de alumnos';
    $scope.subtitle = 'Alumnos de posgrado psicología.';
    
    var query = student.get(function() {
      $scope.students = query.student;    
    });
  })
  .controller('StudentCtrl', function ($scope, $routeParams, student) {
    $scope.title = 'Catalogo de alumnos';
    $scope.subtitle = 'Alumnos de posgrado psicología.';
    
    var query = student.get({ id: $routeParams.studentId },function() {
      $scope.student = query.student[0];    
    });
  });