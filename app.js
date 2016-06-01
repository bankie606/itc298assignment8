var introApp = angular.module('introApp',[]);
introApp.controller('IntroController', ['$scope', function($scope) {
  $scope.name = 'User';
  $scope.buttonText = 'Reset';
  $scope.synths = [
    {id: 0, brand: 'korg', model:'Poly-800', price: 250.00, polyphony: '6 Voices', src:'public/images/poly800.png'},
    {id: 1, brand: 'nord', model:'Micro-Modular', price: 400.00, polyphony: 'Variable/ 6 Voices', src: 'public/images/micromodular.png'},
    {id: 2, brand: 'elektron',model:'Monomachine', price: 500.00, polyphony: 'Variable/ 6 Voices', src: 'public/images/monomachine.png'},
    {id: 3, brand: 'ensoniq', model:'Fizmo', price: 1500.00, polyphony: '32 Voices', src:'public/images/fizmo.png'},
    {id: 4, brand: 'moog', model:'Memory Moog', price: 2500.00, polyphony: 'No, monophonic', src:'public/images/memorymoog.png'},
    {id: 5, brand: 'buchla', model:'Who In Their Right Mind Would Buy This?', price: 6500.00, polyphony: "No, monophonic", src:'public/images/buchla.png'},
    {id: 6, brand: 'emu' , model:"Proteus-1", price: 65.00, polyphony: '16 Voices', src:'public/images/proteus.png'}
    ];
 
 
 $scope.mybrandfunction = function(synth) {
    $scope.synth= synth;
    $( "#dialog" ).dialog();
  };



$scope.mymodelfunction = function(synth){
  $scope.synth= synth;
  $( "#dialog2").dialog();
}; 

// var photos = [
// 	  "public/images/buchla.jpg",
//     "public/images/fizmo.jpeg",
//     "public/images/memorymoog.jpeg",
//     "public/images/micromodular.png",
//     "public/images/monomachine.jpg",
//     "public/images/poly800.jpg"
// ];

// var photoIndex = 0;
// var current = "one";

// function init() {
// 	var img = document.getElementById("one");
// 	img.src = photos[photoIndex];
// }
// window.onload = init;

 
}]);

