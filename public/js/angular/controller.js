angular.module('findMe')
.controller('ArtistCtrl', ['ArtistService', function(ArtistService){
    var self = this;
    self.artists = [];
    var id_usuario = 'l10160011457660157';
    self.search = function(){
        ArtistService.getArtist(self.name, id_usuario).then(function(response){
            self.artists = response.data;
        });
    }
}])
.controller('ArtistEventCtrl', ['ArtistService','$location', '$routeParams', function(ArtistService, $location, $routeParams){
    var self = this;
    self.event = {};
    var id_usuario = 'l10160011457660157';
    console.log($routeParams.name);
    ArtistService.getArtistEvent($routeParams.name, id_usuario).then(function(response){
        self.event = response.data;
    }, function(error){
        $location.path('/login');
    });
}]);