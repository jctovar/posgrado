angular.module('main.controllers', ['main.models', 'main.directives'])
.controller('MainCtrl', function ($scope, $route, $routeParams, $location) {
      
})
  
.controller('NavController', function ($scope, $location, $cookies, auth) {
    //console.log($scope);
    //$cookies.nombrecookie = "unodepiera";
    //para acceder
    console.log(JSON.stringify($cookies.username));
})
// get all students  
.controller('StudentsCtrl', function ($scope, $modal, student) {
    $scope.title = 'Catalogo de alumnos';
    $scope.subtitle = 'Alumnos de posgrado psicología.';
    
    $scope.detail = function(username) {
      var detailModal = $modal({scope: $scope, templateUrl: 'templates/detail-student.html', show: false});

      var data = student.get({ id: username }, function() {
          $scope.content = data.student[0];
      })
      detailModal.$promise.then(detailModal.show);
    };
    
    var query = student.get(function() {
      $scope.students = query.student;    
    });
  })
  
  .controller('StudentCtrl', function ($scope, $routeParams, student) {
    $scope.title = 'Datos del alumno';

    var query = student.get({ id: $routeParams.studentId },function() {
      $scope.student = query.student[0];    
    });
  })
// get all teachers  
  .controller('TeachersCtrl', function ($scope, $modal,teacher) {
    $scope.title = 'Catalogo de profesores';
    $scope.subtitle = 'Profesores de posgrado psicología.';
   
    $scope.detail = function(username) {
      var detailModal = $modal({scope: $scope, templateUrl: 'templates/detail-teacher.html', show: false});

      var data = teacher.get({ id: username }, function() {
          console.log(JSON.stringify(data.teacher[0]));
          $scope.content = data.teacher[0];
      })
      detailModal.$promise.then(detailModal.show);
    };
    
    var query = teacher.get(function() {
      $scope.teachers = query.teacher;    
    });
  })

  .controller('TeacherCtrl', function ($scope, $routeParams, teacher) {
    $scope.title = 'Datos del profesor';
    
    var query = teacher.get({ id: $routeParams.teacherId },function() {
      $scope.teacher = query.teacher[0];    
    });
  })
  
  .controller('ProjectsCtrl', function ($scope, project) {
    $scope.title = 'Catalogo de proyectos';
    $scope.subtitle = 'Proyectos de posgrado psicología.';
    
    var query = project.get(function() {
      $scope.projects = query.project;    
    });
  })
  
  .controller('CoursesCtrl', function ($scope, course) {
    $scope.title = 'Catalogo de cursos';
    $scope.subtitle = 'Cursos de posgrado psicología.';
    
    var query = course.get(function() {
      $scope.courses = query.course;    
    });
  })
  
  .controller('DashboardCtrl', function ($scope, $cookies) {
    $scope.title = 'Tablero de control';
    
    console.log(JSON.stringify($cookies.username));
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
    $scope.author = 'monsieur Tovar';
    $scope.email = 'jctovar@ired.unam.mx';
    $scope.alias = 'jctovar';
    $scope.slogan = 'Nam et ipsa scientia potestas es';
    $scope.contact = 'follow me @jctovarg';
    $scope.url = 'https://twitter.com/jctovarg';
  })
  
  .controller('LoginCtrl', function($scope, auth) {
    //la función login que llamamos en la vista llama a la función
    //login de la factoria auth pasando lo que contiene el campo
    //de texto del formulario
    $scope.login = function()
    {
        auth.login($scope.username, $scope.password);
    }
 
});;