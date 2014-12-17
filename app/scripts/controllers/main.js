'use strict';

/**
 * @ngdoc function
 * @name emilyChristmas2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emilyChristmas2014App
 */
angular.module('emilyChristmas2014App')
  .controller('selectionsController', function ($scope) {
    $scope.test = 'this is a test';
    $scope.faces = [
      'images/emily_pic1.png',
      'images/emily_pic2.png',
      'images/emily_pic3.png',
      'images/emily_pic4.png',
      'images/emily_pic5.png',
      'images/emily_pic6.png',
    ];
    $scope.bodies = [
      'images/santa_body.png',
      'images/elf_body.png',
      'images/octocat.png',
      'images/bodybuilder.png',
      'images/jessica_rabbit.png',
      'images/pookie_bear.png',
      'images/gorilla.png'
    ];
    $scope.hats = [
      'images/santa_hat.png',
      'images/elf_hat.png',
      'images/bowler.png',
      'images/top.png',
      'images/propeller.png',
      'images/giraffe.png'
    ];
    $scope.backgrounds = [
      'images/north_pole.png',
      'images/santa_workshop.png',
      'images/tropics.png',
      'images/jungle.png',
      'images/woodlands.png',
      'images/mordor.png',
      'images/casablanca.png'
    ];
  });
