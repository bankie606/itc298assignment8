angular.module('synthsApp', []).controller('SynthsController', function($scope) {
    $scope.synths = [
        {brand:'Korg',model:'Poly-800'},
        {brand:'Nord',model:'Micro Modular'},
        {brand:'Elektron',model:'Monomachine'}
    ];
});