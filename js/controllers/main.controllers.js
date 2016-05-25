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
.controller('StudentsCtrl', function ($scope, $location, $mdDialog, $mdToast, students) {
  $scope.title = 'Catalogo de alumnos';
  
  $scope.$on('$viewContentLoaded', function ($evt, data) {
      inito();
  });
 
  $scope.clear = function () {
      console.log($scope.searchQuery);
      $scope.searchQuery = '';
  }
  
  $scope.add = function () {
      $location.path('/student')
  }
  
  $scope.edit = function (index) {
      $location.path('/student/'+ index);
  }
  
  $scope.delete = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Esta seguro de eliminar este registro?')
            .textContent('El registro sera eliminado permanentemente.')
            .ok('Si')
            .cancel('No');
            $mdDialog.show(confirm).then(function() {
                    del(index);
                }, function() {
                console.log('You decided to keep your record.')
            });
  };
  
  var del = function (id) {
        students.delete({ id: id })
        .$promise.then(function (result) {
            inito();
            $mdToast.show($mdToast.simple().textContent('Registro eliminado!'));
        })
        .catch(function(error) {
             $mdToast.show($mdToast.simple().textContent('Ocurrio un error!'));
        });    
  }
  
  var inito = function () {
        $scope.bar = false;
        students.get()
        .$promise.then(function (result) {
            $scope.items = result.students;
            $scope.bar = !$scope.bar;
        })
        .catch(function(error) {
             $location.path('/login')
        });
   };
})

.controller('AddStudentCtrl', function ($scope, $location, $routeParams, $mdToast, students, schools, fields, grades) {
    $scope.counter = 0;
    
    $scope.save = function () {  
          if ($scope.counter != 0) {
              var result = students.save($scope.item, function() {
                  if (result.students.affectedRows == 1) {
                      $mdToast.show($mdToast.simple().textContent('Datos guardados!'));
                      $location.path('/students')
                  };
              });            
          } else {
              $location.path('/students')
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

.controller('EditStudentCtrl', function ($scope, $location, $routeParams, $mdToast, students, schools, fields, grades) {
    $scope.counter = 0;
    
    $scope.save = function () {  
          if ($scope.counter != 0) {
              var result = students.update($scope.item, function() {
                  if (result.students.affectedRows == 1) {
                      $mdToast.show($mdToast.simple().textContent('Datos guardados!'));
                      $location.path('/students')
                  };
              });            
          } else {
              $location.path('/students')
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
    
    var query = students.get({ id: $routeParams.studentId },function() {
        $scope.item = query.students[0];    
    });
})


.controller('TeachersCtrl', function ($scope, $location, $mdDialog, $mdToast, teachers) {
  $scope.title = 'Catalogo de profesores';
  
  $scope.$on('$viewContentLoaded', function ($evt, data) {
      inito();
  });
 
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
  
  $scope.delete = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Esta seguro de eliminar este registro?')
            .textContent('El registro sera eliminado permanentemente.')
            .ok('Si')
            .cancel('No');
            $mdDialog.show(confirm).then(function() {
                    del(index);
                }, function() {
                console.log('You decided to keep your record.')
            });
  };
  
  var del = function (id) {
        teachers.delete({ id: id })
        .$promise.then(function (result) {
            inito();
            $mdToast.show($mdToast.simple().textContent('Registro eliminado!'));
        })
        .catch(function(error) {
             $mdToast.show($mdToast.simple().textContent('Ocurrio un error!'));
        });    
  }
  
  var inito = function () {
        $scope.bar = false;
        teachers.get()
        .$promise.then(function (result) {
            $scope.items = result.teachers;
            $scope.bar = !$scope.bar;
        })
        .catch(function(error) {
             $location.path('/login')
        });
   };
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

.controller('CoursesCtrl', function ($scope, $location, $mdDialog, $mdToast, courses) {
  $scope.title = 'Catalogo de cursos';
  
  $scope.$on('$viewContentLoaded', function ($evt, data) {
      inito();
  });
 
  $scope.clear = function () {
      console.log($scope.searchQuery);
      $scope.searchQuery = '';
  }
  
  $scope.add = function () {
      $location.path('/course')
  }
  
  $scope.edit = function (index) {
      $location.path('/course/'+ index);
  }
  
  $scope.delete = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Esta seguro de eliminar este registro?')
            .textContent('El registro sera eliminado permanentemente.')
            .ok('Si')
            .cancel('No');
            $mdDialog.show(confirm).then(function() {
                    del(index);
                }, function() {
                console.log('You decided to keep your record.')
            });
  };
  
  var del = function (id) {
        teachers.delete({ id: id })
        .$promise.then(function (result) {
            inito();
            $mdToast.show($mdToast.simple().textContent('Registro eliminado!'));
        })
        .catch(function(error) {
             $mdToast.show($mdToast.simple().textContent('Ocurrio un error!'));
        });    
  }
  
  var inito = function () {
        $scope.bar = false;
        courses.get()
        .$promise.then(function (result) {
            $scope.items = result.courses;
            $scope.bar = !$scope.bar;
        })
        .catch(function(error) {
             $location.path('/login')
        });
   };
})

.controller('ProjectsCtrl', function ($scope, project) {
  $scope.title = 'Catalogo de proyectos';
  $scope.subtitle = 'Proyectos de posgrado psicología.';
  
  var query = project.get(function() {
    $scope.projects = query.project;    
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