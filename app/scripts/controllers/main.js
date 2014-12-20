'use strict';

/**
 * @ngdoc function
 * @name emilyChristmas2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emilyChristmas2014App
 */

angular.module('emilyChristmas2014App')
  .controller('emilyChristmasController', function ($scope) {
    $scope.faces = [
        'images/emily_pic1.png',
        'images/emily_pic2.png',
        'images/emily_pic3.png',
        'images/emily_pic4.png',
        'images/emily_pic5.png',
        'images/emily_pic6.png'
      ];
    $scope.bodies = [
        'images/santa_body.png',
        'images/elf_body.png',
        'images/octocat.png',
        'images/bodybuilder.png',
        'images/jessica_rabbit.png',
        'images/pookie_bear.png',
        'images/gorilla.png',
      ];
    $scope.hats = [
        'images/santa_hat.png',
        'images/elf_hat.png',
        'images/bowler.png',
        'images/top.png',
        'images/propeller.png',
        'images/giraffe.png',
      ];
    $scope.backgrounds = [
        'images/north_pole.png',
        'images/claymation_christmas.png',
        'images/tropics.jpg',
        'images/mordor.jpg',
        'images/casablanca.jpg',
      ];
    $scope.menu = 'init';
    $scope.face = 'images/emily_pic1.png';
    $scope.hat = 'images/santa_hat.png';
    $scope.body = 'images/santa_body.png';
    $scope.background = 'images/north_pole.png';
    $scope.setItem = function(item, group){
      $scope[group] = item;
    };
    $scope.itemSelected = function(item, group){
      return ($scope[group] === item);
    };
  });
