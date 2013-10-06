frontendApp.controller('MediaPlayerController',function ($scope, mediaPlayerService) {
    
    mediaPlayerService.readAll().then(function (receivedMediaPlayerList) {
        $scope.mediaPlayerList = receivedMediaPlayerList;
    });
});
