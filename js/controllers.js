/**
 * Declare controllers module
 * @type {module}
 */
var phonecatControllers = angular.module('phonecatControllers', []);

/**
 * Controller for Phones list page
 */
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', 'Phone', function ($scope, $http, Phone) {

    /**
     * Declare App Name
     * @type {string}
     */
    $scope.appName = 'Phone Cat App';

     // Get the list of phones from the server
     $scope.phones = $scope.phones = Phone.all();

    //
    $scope.orderProp = 'age';
}]);

/**
 * Controller for Detailed Phone page
 */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function() {
        $scope.bigImageUrl = $scope.phone.images[0];
    });

    $scope.setBigImage = function(imgUrl) {
        $scope.bigImageUrl = imgUrl;
    };
}]);




















