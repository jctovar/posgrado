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
  })
  .controller('AboutCtrl', function ($scope, about) {
    $scope.title = 'Directorio de la UNAM';
    $scope.subtitle = 'Universidad Nacional Autónoma de México.';
    
    var query = about.get(function() {
      $scope.about = query.about;    
    });
  })
  .controller('CreditsCtrl', function ($scope) {
      
    $scope.title = 'Creditos y contacto';
    $scope.subtitle = 'Alumnos de posgrado psicología.';
    $scope.author = 'Juan Carlos Tovar';
    $scope.email = 'jctovar@ired.unam.mx';
    $scope.alias = 'jctovar';
    $scope.slogan = 'Nam et ipsa scientia potestas es';
    $scope.contact = 'twitter.com/jctovarg';
    $scope.url = 'https://twitter.com/jctovarg';
    
  });