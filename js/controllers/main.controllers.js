angular.module('main.controllers', ['main.auth','main.models', 'main.directives'])

.controller('MainCtrl', function ($scope) {
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
})

.controller('MenuCtrl', function ($scope) {
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
})
  
.controller('NavCtrl', function ($scope, $location, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
})

.controller('BackCtrl', function ($scope, $location, $window) {
    $scope.back = function () {
        $window.history.back();
    }
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

.controller('TeachersCtrl', function ($scope, $location, teachers) {
  $scope.title = 'Catalogo de profesores';
 
  $scope.clear = function () {
      console.log($scope.searchQuery);
      $scope.searchQuery = '';
  }
  
  $scope.add = function () {
      $location.path('/teacher')
  }
  
  $scope.edit = function (index) {
      $location.path('/teacher/'+ index);
  }
  
  var query = teachers.get(function() {
    $scope.items = query.teachers;    
  });
})

.controller('AddTeacherCtrl', function ($scope, $location, $mdToast, teachers, schools, fields, grades) {
    $scope.counter = 0;
    
    $scope.save = function () {  
          if ($scope.counter != 0) {
              var result = teachers.save($scope.item, function() {
                  if (result.teachers.affectedRows == 1) {
                      $mdToast.show($mdToast.simple().textContent('Datos guardados!'));
                      $location.path('/teachers')
                  };
              });            
          } else {
              $location.path('/teachers')
          }
    };
    
    $scope.change = function() {
        $scope.counter++;
    };

    var query1 = schools.get(function() {
        $scope.list1 = query1.schools;    
    });

    var query2 = fields.get(function() {
        $scope.list2 = query2.fields;    
    });

    var query3 = grades.get(function() {
        $scope.list3 = query3.grades;    
    })
})
  
.controller('EditTeacherCtrl', function ($scope, $location, $routeParams, $mdToast, teachers, schools, fields, grades) {
    $scope.counter = 0;
    
    $scope.save = function () {  
          if ($scope.counter != 0) {
              var result = teachers.update($scope.item, function() {
                  if (result.teachers.affectedRows == 1) {
                      $mdToast.show($mdToast.simple().textContent('Datos guardados!'));
                      $location.path('/teachers')
                  };
              });            
          } else {
              $location.path('/teachers')
          }
    };
    
    $scope.change = function() {
        $scope.counter++;
    };
    
    var query1 = schools.get(function() {
        $scope.list1 = query1.schools;    
    });
    
    var query2 = fields.get(function() {
        $scope.list2 = query2.fields;    
    });
    
    var query3 = grades.get(function() {
        $scope.list3 = query3.grades;    
    });
    
    var query = teachers.get({ id: $routeParams.teacherId },function() {
        $scope.item = query.teachers[0];    
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

.controller('DashboardCtrl', function ($scope) {
  
    
  $scope.title = 'Escritorio';
  
  //console.log(JSON.stringify($cookies.username));
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
});