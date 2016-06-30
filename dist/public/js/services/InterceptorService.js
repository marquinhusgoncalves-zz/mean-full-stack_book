angular.module('contatooh').factory('meuInterceptor', ["$q", "$location", function($q, $location) {  

    var meuInterceptor = {
    	responseError: function(resposta) {
    		if (resposta.status == 401) {
    		  $location.path('/auth');
    		}
            return $q.reject(resposta);
    	}
    }

    return meuInterceptor;
}]);