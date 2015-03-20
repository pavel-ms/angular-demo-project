/**
 * Declare Angular App
 * @type {module} - AngularJs Module
 */
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute'
    , 'phonecatAnimations'
    , 'phonecatControllers'
    , 'phonecatFilters'
    , 'phonecatServices'
]);

/**
 * Config the router
 */
phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // rules for routing
        .when('/phones', {
            templateUrl: '/views/phones-list.html',
            controller: 'PhoneListCtrl'
        })
        .when('/phones/:phoneId', {
            templateUrl: '/views/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        })
        // use this "redirect" if neither of patterns haven`t matched
        .otherwise({
            redirectTo: '/phones'
        });
}]);