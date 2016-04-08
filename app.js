angular.module('starter', ['ngRoute', 'ngResource', 'ngAnimate', 'main.controllers'])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/students', {
          templateUrl: 'templates/students.html',
          controller: 'StudentsCtrl',
          controllerAs: 'book'
        })
        .when('/students/:studentId', {
          templateUrl: 'chapter.html',
          controller: 'StudentCtrl',
          controllerAs: 'chapter'
        })
        .otherwise({
          redirectTo: '/',
          templateUrl: 'main.html',
          controller: 'MainCtrl'
        });
  }])


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/