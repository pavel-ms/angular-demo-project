/**
 * Declare our services here
 * @type {*|module}
 */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource', function($resource){
    return $resource('data/phones/:phoneId.json', {}, {
        all: {
            method:'GET'
            , params: {phoneId: 'phones'}
            , isArray:true
        }
    });
}]);