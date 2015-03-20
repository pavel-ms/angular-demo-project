/**
 * Declare controllers module
 * @type {module}
 */
var phonecatControllers = angular.module('phonecatControllers', []);

/**
 * Declare controller for phonecatApp
 */
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {

    /**
     * We should declare dependencies by this way because of renaming function variables by
     * compressing javascript
     * @type {string[]}
     */
    phonecatApp.$inject = ['$scope', '$http'];  // array of dependencies declared as a strings

    /**
     * Declare App Name
     * @type {string}
     */
    $scope.appName = 'Phone Cat App';

    /**
     * Bind the array of phones to $scope
     * @type {Array}
     */
//    $scope.phones = [
//        {'name': 'Nexus S', 'descr': 'Fast just got faster with Nexus S.', age: 3}
//        , {'name': 'Motorola XOOM™ with Wi-Fi', 'descr': 'The Next, Next Generation tablet.', age: 1}
//        , {'name': 'Apple iPhone', 'descr': 'And this just Apple', age: 5}
//    ];

    /**
     * Get the list of phones from the server
     */
    $http
        .get('/data/phones/phones.json')  // get returns promise object
        .success(function(data) {
            $scope.phones = data;
        });

    //
    $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
}]);