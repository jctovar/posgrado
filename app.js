angular.module('starter', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap', 'ui.gravatar', 'main.controllers'])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
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
        .when('/teachers/:teacherId', {
          templateUrl: 'templates/edit-teacher.html',
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
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        });
  }])

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/