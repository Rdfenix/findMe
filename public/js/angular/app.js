angular.module('findMe', ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
    }).when('/search', {
        templateUrl: 'views/search.html'
    }).when('/events/:name', {
        templateUrl: 'views/information.html',
        controller: 'ArtistEventCtrl as artEve'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});
