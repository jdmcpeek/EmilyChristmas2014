'use strict';

/**
 * @ngdoc function
 * @name emilyChristmas2014App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emilyChristmas2014App
 */

angular.module('emilyChristmas2014App')
  .controller('emilyChristmasController', function ($scope, ngAudio) {
    $scope.faces = [
        'images/emily_pic1.png'
      ];
    $scope.bodies = [
        'images/santa_body.png',
        'images/elf_body.png',
        'images/octocat.png',
        'images/bodybuilder.png',
        'images/marilyn.png',
        'images/pookie_bear.png',
        'images/gorilla.png',
      ];
    $scope.hats = [
        'images/santa_hat.png',
        'images/elf_hat.png',
        'images/bowler.png',
        'images/top.png',
        'images/propeller.png',
        'images/miter.png',
      ];
    $scope.backgrounds = [
        'images/north_pole.png',
        'images/claymation_christmas.jpg',
        'images/inca.jpg',
        'images/mordor.jpg',
        'images/casablanca.jpg',
        'images/charlie_brown.jpg'
      ];
    $scope.menu = 'init';
    $scope.face = 'images/emily_pic1.png';
    $scope.hat = 'images/santa_hat.png';
    $scope.body = 'images/santa_body.png';
    $scope.background = 'images/north_pole.png';
    $scope.untouchedBackground = true;
    $scope.setItem = function(item, group){
      $scope[group] = item;
    };
    $scope.setBackground = function(image){
      $scope.background = image;
      $scope.untouchedBackground = false;
    };
    $scope.itemSelected = function(item, group){
      return ($scope[group] === item);
    };
    $scope.normalizeAsset = function(item){
      return $scope[item].slice(7,-4);
    };
    function toTitleCase(str)
    {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    $scope.normalizeImage = function(image){
      var regex = /_/g;
      var string = image.slice(7,-4);
      var normalized = string.replace(regex, ' ');
      var imageTitle = toTitleCase(normalized);
      return imageTitle;
    };
    $scope.music = ngAudio.load('images/rock_lobster.mp3');
    $scope.randomSound = function() {
      var effects = [
        'images/gulp.wav',
        'images/jews_harp1.wav',
        'images/jews_harp2.wav',
        'images/meepmeep.wav',
        'images/mouth_pop.wav',
        'images/pop.wav',
        'images/pop2.wav',
        'images/stamp.wav',
        'images/surprise.wav'
      ];
      var effect = effects[Math.floor(Math.random()*effects.length)];
      var loadedEffect = ngAudio.load(effect);
      return loadedEffect;
    };
    $scope.matchingSong = function(image) {
      var song = 'images/' + image.slice(7,-4) + '.mp3';
      var loadedSong = ngAudio.load(song);
      return loadedSong;
    };

  });
