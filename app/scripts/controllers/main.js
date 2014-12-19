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
    $scope.faces = {
      images: [
        { image: 'images/emily_pic1.png', onCanvas: true },
        { image: 'images/emily_pic2.png', onCanvas: true },
        { image: 'images/emily_pic3.png', onCanvas: true },
        { image: 'images/emily_pic4.png', onCanvas: true },
        { image: 'images/emily_pic5.png', onCanvas: true },
        { image: 'images/emily_pic6.png', onCanvas: true }
      ]
    };
    $scope.bodies = {
      images: [
        { image: 'images/santa_body.png', onCanvas: true },
        { image: 'images/elf_body.png', onCanvas: true },
        { image: 'images/octocat.png', onCanvas: true },
        { image: 'images/bodybuilder.png', onCanvas: true },
        { image: 'images/jessica_rabbit.png', onCanvas: true },
        { image: 'images/pookie_bear.png', onCanvas: true },
        { image: 'images/gorilla.png', onCanvas: true }
      ]
    };
    $scope.hats = {
      images: [
        { image: 'images/santa_hat.png', onCanvas: true },
        { image: 'images/elf_hat.png', onCanvas: true },
        { image: 'images/bowler.png', onCanvas: true },
        { image: 'images/top.png', onCanvas: true },
        { image: 'images/propeller.png', onCanvas: true },
        { image: 'images/giraffe.png', onCanvas: true }
      ]
    };
    $scope.backgrounds = {
      images: [
        { image: 'images/north_pole.png', onCanvas: true },
        { image: 'images/claymation_christmas.png', onCanvas: true },
        { image: 'images/tropics.jpg', onCanvas: true },
        { image: 'images/mordor.jpg', onCanvas: true },
        { image: 'images/casablanca.jpg', onCanvas: true }
      ]
    };
    $scope.menu = 'init';
    $scope.face = 'images/emily_pic1.png';
    $scope.hat = 'images/santa_hat.png';
    $scope.body = 'images/santa_body.png';
    $scope.background = 'images/north_pole.png';
    $scope.setFace = function(face){
      this.face = face;
    };
    $scope.setHat = function(hat){
      this.hat = hat;
    };
    $scope.setBody = function(body){
      this.body = body;
    };
    $scope.setBackground = function(background){
      this.background = background;
    };
    $scope.setMenu = function(menuClicked){
      this.menu = menuClicked;
    };
    $scope.isSelected = function(menuItem){
      return (this.menu === menuItem);
    };
  });
