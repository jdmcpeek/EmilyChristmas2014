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
    $scope.all = {
      faces: {
        images: [
          { image: 'images/emily_pic1.png', onCanvas: true },
          { image: 'images/emily_pic2.png', onCanvas: false },
          { image: 'images/emily_pic3.png', onCanvas: false },
          { image: 'images/emily_pic4.png', onCanvas: false },
          { image: 'images/emily_pic5.png', onCanvas: false },
          { image: 'images/emily_pic6.png', onCanvas: false }
        ],
        menuOpen: true
      },
      bodies: {
        images: [
          { image: 'images/santa_body.png', onCanvas: true },
          { image: 'images/elf_body.png', onCanvas: false },
          { image: 'images/octocat.png', onCanvas: false },
          { image: 'images/bodybuilder.png', onCanvas: false },
          { image: 'images/jessica_rabbit.png', onCanvas: false },
          { image: 'images/pookie_bear.png', onCanvas: false },
          { image: 'images/gorilla.png', onCanvas: false }
        ],
        menuOpen: true
      },
      hats: {
        images: [
          { image: 'images/santa_hat.png', onCanvas: true },
          { image: 'images/elf_hat.png', onCanvas: false },
          { image: 'images/bowler.png', onCanvas: false },
          { image: 'images/top.png', onCanvas: false },
          { image: 'images/propeller.png', onCanvas: false },
          { image: 'images/giraffe.png', onCanvas: false }
        ],
        menuOpen: true
      },
      backgrounds: {
        images: [
          { image: 'images/north_pole.png', onCanvas: true },
          { image: 'images/santa_workshop.png', onCanvas: false },
          { image: 'images/tropics.png', onCanvas: false },
          { image: 'images/jungle.png', onCanvas: false },
          { image: 'images/woodlands.png', onCanvas: false },
          { image: 'images/mordor.png', onCanvas: false },
          { image: 'images/casablanca.png', onCanvas: false }
        ],
        menuOpen: true
      }
    };
    $scope.test = function () {
      this.all.faces.menuOpen = !this.all.faces.menuOpen;
    };
    // $scope.hideImages = function (img) {
    //
    // };
    // $scope.showMenu = function (img) {
    //   for (var part in this.all) {
    //     part.menuOpen = false;
    //   }
    //   this.all[img].menuOpen = true;
    // };
  });
