var meteoControllers = angular.module('meteoControllers', []);
meteoControllers.controller('MainController', ['$scope', '$http',
function($scope, $http) {
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=3cc8d6964f710f7694ebbc7ffb7bf6bd)
.success(function(data) {
$scope.meteo = data;
}).error(function(data) {
/* en cas d’erreur */
$scope.errorMsg = "Hum. Error... please retry.";
});
}
}]);
