angular.module('main.models', ['ngResource'])

.constant("server_config",{url : "https://galadriel.ired.unam.mx:3002", key : "84656ca7c7ccc6b44523a18b6bdf94140220bfc8"})

.factory('student', function($resource, server_config) {
	return $resource(server_config.url + '/student/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('teacher', function($resource, server_config) {
	return $resource(server_config.url + '/teacher/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('project', function($resource, server_config) {
	return $resource(server_config.url + '/project/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})