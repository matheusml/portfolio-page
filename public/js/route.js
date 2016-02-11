(function() {
	'use strict';

	angular
        .module('app')
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'html/home/index.html',
            })
            .when('/blog', {
                templateUrl: 'html/blog/index.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
