angular.module('main.models', ['ngResource'])

.constant("server_config",{url : "https://galadriel.ired.unam.mx:3002", key : "84656ca7c7ccc6b44523a18b6bdf94140220bfc8"})

.factory('student', function($resource, server_config) {
	return $resource(server_config.url + '/student/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('teachers', function($resource, server_config) {
	return $resource(server_config.url + '/teachers/:id', { account_key : server_config.key, id : '@_id' },
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

.factory('course', function($resource, server_config) {
	return $resource(server_config.url + '/course/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('schools', function($resource, server_config) {
	return $resource(server_config.url + '/schools/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('fields', function($resource, server_config) {
	return $resource(server_config.url + '/fields/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('grades', function($resource, server_config) {
	return $resource(server_config.url + '/grades/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})