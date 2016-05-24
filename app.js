angular.module('starter', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngMaterial', 'ngMdIcons', 'ngAnimate', 'ngAria', 'ui.gravatar', 'main.controllers'])
  .config(function($mdThemingProvider) {
    
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
        .when('/students/:studentId', {
          templateUrl: 'templates/edit-student.html',
          controller: 'StudentCtrl',
          controllerAs: 'chapter'
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