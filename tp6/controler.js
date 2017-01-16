var meteoControllers = angular.module('meteoControllers', []);
meteoControllers.controller('MainController', ['$scope', '$http',
function($scope, $http) {
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=3cc8d6964f710f7694ebbc7ffb7bf6bd)
.success(function(data) {
[
{
}
]

$scope.meteo = data;
}).error(function(data) {
/* en cas d’erreur */
$scope.errorMsg = "Hum. Error... please retry.";
});
}
}]);

function gps(){

   if (navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(showPosition, showError);

   } else {

       document.getElementById("nom").innerHTML = "Geolocation is not supported by this browser.";

   }

}
function showPosition(position) {
	  searchLatLng(position.coords.latitude , position.coords.longitude)

}
function showError(error) {

 var x = document.getElementById("nom");

   switch(error.code) {

       case error.PERMISSION_DENIED:

           x.innerHTML = "User denied the request for Geolocation."

           break;

       case error.POSITION_UNAVAILABLE:

           x.innerHTML = "Location information is unavailable."

           break;

       case error.TIMEOUT:

           x.innerHTML = "The request to get user location timed out."

           break;

       case error.UNKNOWN_ERROR:

           x.innerHTML = "An unknown error occurred."

           break;

   }}
