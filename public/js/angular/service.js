angular.module('findMe')
.factory('ArtistService', ['$http', function($http){
    var baseURL = "https://rest.bandsintown.com/artists/";
    return {
        getArtist: function(name, id_usuario){
            return $http.get(baseURL + name + '?app_id=' + id_usuario);
        },
        getArtistEvent: function(name, id_usuario){
            return $http.get( baseURL + name + '/events?app_id=' + id_usuario);
        }
    }
}]);