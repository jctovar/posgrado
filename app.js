angular.module('starter', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngMaterial', 'ngAnimate', 'ngAria', 'ui.gravatar', 'main.controllers'])
  .config(function($mdThemingProvider) {
    
  })
  
  .config(function($mdIconProvider) {
      // Configure URLs for icons specified by [set:]id.
      $mdIconProvider
          .icon('add', 'img/icons/ic_add_black_24px.svg')
          .icon('more_vert', 'img/icons/ic_more_vert_black_24px.svg')    // Register a specific icon (by name)
          .icon('check', 'img/icons/ic_done_black_24px.svg')
          .icon('arrow_back', 'img/icons/ic_arrow_back_black_24px.svg')
          .icon('search', 'img/icons/ic_search_black_24px.svg')
          .icon('edit', 'img/icons/ic_mode_edit_black_24px.svg')
          .icon('delete', 'img/icons/ic_delete_forever_black_24px.svg')
          .icon('clear', 'img/icons/ic_clear_black_24px.svg')
          .icon('menu', 'img/icons/ic_menu_black_24px.svg')
  })
  
  .run(function($http, $templateCache){
    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $http calls will look there first.
    var urls = ['img/icons/ic_more_vert_black_24px.svg', 'img/icons/ic_mode_edit_black_24px.svg', 'img/icons/ic_delete_forever_black_24px.svg'];
    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  })

  .run(function ($rootScope, $location) {
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        //auth.checkStatus();
    })
    
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
  })
  
  .config(function () {
    sessionStorage.account_id = 1;
    sessionStorage.profile_id = 1;
    
  })

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/teachers', {
          title: 'Profesores',
          templateUrl: 'templates/teachers.html',
          controller: 'TeachersCtrl'
        })
        .when('/teacher', {
          title: 'Agregar profesor',
          templateUrl: 'templates/teacher.html',
          controller: 'AddTeacherCtrl'
        })
        .when('/teacher/:teacherId', {
          title: 'Editar profesor',
          templateUrl: 'templates/teacher.html',
          controller: 'EditTeacherCtrl'
        })
        .when('/students', {
          title: 'Alumnos',
          templateUrl: 'templates/students.html',
          controller: 'StudentsCtrl'
        })
        .when('/student', {
          title: 'Agregar alumno',
          templateUrl: 'templates/student.html',
          controller: 'AddStudentCtrl'
        })
        .when('/student/:studentId', {
          title: 'Editar alumno',
          templateUrl: 'templates/student.html',
          controller: 'EditStudentCtrl',
        })
        .when('/projects', {
          templateUrl: 'templates/projects.html',
          controller: 'ProjectsCtrl'
        })
        .when('/courses', {
          templateUrl: 'templates/courses.html',
          controller: 'CoursesCtrl'
        })
        .when('/', {
          title: 'Inicio',
          templateUrl: 'templates/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        })
        .when('/dashboard', {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .when('/about', {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        })
        .when('/credits', {
          templateUrl: 'templates/credits.html',
          controller: 'CreditsCtrl'
        })
        .otherwise({
          redirectTo: '/',
          templateUrl: 'templates/main/main.html',
          controller: 'MainCtrl'
        });
  }])

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/