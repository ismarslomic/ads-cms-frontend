frontendApp.controller('MediaPlayerController',function ($scope, mediaPlayerService) {
    
    $scope.test = 5;
    mediaPlayerService.readAll().then(function (receivedMediaPlayerList) {
        $scope.mediaPlayerList = receivedMediaPlayerList;
    });
});
