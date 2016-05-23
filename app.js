angular.module('starter', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'ngMaterial', 'ngMdIcons', 'ngAnimate', 'ngAria', 'ui.gravatar', 'main.controllers'])
  .run(function ($rootScope) {
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        //auth.checkStatus();
    })
  })
  
  .config(function () {
    sessionStorage.account_id = 1;
    sessionStorage.profile_id = 1;
    
  })

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/students', {
          templateUrl: 'templates/students.html',
          controller: 'StudentsCtrl'
        })
        .when('/students/:studentId', {
          templateUrl: 'templates/edit-student.html',
          controller: 'StudentCtrl',
          controllerAs: 'chapter'
        })
        .when('/teachers', {
          templateUrl: 'templates/teachers.html',
          controller: 'TeachersCtrl'
        })
        .when('/teacher', {
          templateUrl: 'templates/teacher.html',
          controller: 'TeacherCtrl'
        })
        .when('/teacher/:teacherId', {
          templateUrl: 'templates/teacher.html',
          controller: 'TeacherCtrl'
        })
        .when('/projects', {
          templateUrl: 'templates/projects.html',
          controller: 'ProjectsCtrl'
        })
        .when('/courses', {
          templateUrl: 'templates/courses.html',
          controller: 'CoursesCtrl'
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