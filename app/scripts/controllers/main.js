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
    $scope.music = ngAudio.load('audio/rock_lobster.mp3');
    $scope.randomSound = function() {
      var effects = [
        'audio/gulp.wav',
        'audio/jews_harp1.wav',
        'audio/jews_harp2.wav',
        'audio/meepmeep.wav',
        'audio/mouth_pop.wav',
        'audio/pop.wav',
        'audio/pop2.wav',
        'audio/stamp.wav',
        'audio/surprise.wav'
      ];
      var effect = effects[Math.floor(Math.random()*effects.length)];
      var loadedEffect = ngAudio.load(effect);
      return loadedEffect;
    };
    $scope.matchingSong = function(image) {
      var song = 'audio/' + image.slice(7,-4) + '.mp3';
      var loadedSong = ngAudio.load(song);
      console.log(song);
      return loadedSong;
    };
    $scope.autoPlay = function(){
      if ($scope.menu === 'init') {
        ngAudio.play('audio/north_pole.mp3');
      }
    };
  });
