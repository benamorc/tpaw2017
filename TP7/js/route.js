meteoApp.config(['$routeProvider',
	function($routeProvider) {	
		/* URL associée : http://127.0.0.1:8080/#/home */
		$routeProvider.when('/home', {
			controller : 'MainController',	templateUrl : 'html/home.html'
		})
		/* URL associée : http://127.0.0.1:8080/#/param, code mis en commentaire en attendant le TP6 */
		/*.when('/param', {
			controller : 'ParamController',	templateUrl : 'html/param.html'
		})*/
		/* Si l'URL est inconnue, on redirige vers la page #/home */
		.otherwise({
			redirectTo : '/home'
		});
}]);
