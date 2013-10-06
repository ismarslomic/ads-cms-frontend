frontendApp.factory('mediaPlayerService', function ($resource, $q){
    

    var mediaPlayerResource = $resource('http://127.0.0.1:5000/api/player/:id', {id: "@id" }, {update: {method: 'PUT'} });//$resource('http://ads-cms-backend.herokuapp.com/api/player/:id', {id: "@id" }, {update: {method: 'PUT'} });

    return {
        readAll: function () {
            var deferred = $q.defer();

            mediaPlayerResource.query(function (result) {
                deferred.resolve(result);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }
});