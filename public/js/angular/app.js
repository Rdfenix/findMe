angular.module('findMe', ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginWithFacebook as loginCtrl'
    }).when('/search', {
        templateUrl: 'views/search.html'
    }).when('/events/:name', {
        templateUrl: 'views/information.html',
        controller: 'ArtistEventCtrl as artEve'
    });
    $routeProvider.otherwise({redirectTo: '/'});
});

window.fbAsyncInit = function() {
    FB.init({
      appId      : '500208297017698',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
    FB.AppEvents.logPageView();    
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=500208297017698';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));