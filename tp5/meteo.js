window.onload= function(){

    document.getElementById("searchCity").addEventListener("submit",function(event){
        event.preventDefault(); // pour annuler le rechargement de la page
        var city=document.getElementById("city").value;
        searchCity(city);
    });

}



function searchCity(_city){
	console.log('searchCity','Hello from ' +_city);    
	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+_city+'&appid=3cc8d6964f710f7694ebbc7ffb7bf6bd', true);
	
	request.onload = function(){
		if(request.status>=200 && request.status<400){
			//Success!
			var responseJSON = JSON.parse(request.responseText);
			console.log(responseJSON);
			var country = responseJSON.name;
			var temp = responseJSON.main.temp;
			var icon = responseJSON.weather.icon;
			//var rain = responseJSON.rain['3h'];
			var Humidity = responseJSON.main.humidity;
			var Cloud = responseJSON.clouds.all;
			var Wind = responseJSON.wind.speed;
			
			document.getElementById("nom").innerHTML ="Ville : " +  country;
			document.getElementById("temp").innerHTML = temp + " K°";
			document.getElementById("icon").src ="http://openweathermap.org/img/w/"+responseJSON.weather[0].icon+".png";
			//document.getElementById("rain").innerHTML = "Rain :" + rain;
			document.getElementById("hum").innerHTML = "Humidity : " + Humidity  + " % ";
			document.getElementById("cloud").innerHTML ="Cloud : " + Cloud;
			document.getElementById("wind").innerHTML = "Wind : " + Wind + " Km/H ";
	
			
			var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+responseJSON.name +"&zoom=13&size=300x300&maptype=roadmap&markers="+responseJSON.name +"";
			document.getElementById("map").innerHTML = '<img src="'+img_url+'"/>';
		} else{
			//We reached our target server, but returned an error
		}
	};
	request.onerror = function(){
	};
	request.send();

}

function getLocation() {

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
   }
}

function searchLatLng(_lat,_lng){
	console.log('searchLatLng','Hello from '+_lat+','+_lng);    
	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+_lat+ '&lon='+_lng+'&appid=8da60da7fbcb4a533e49dba9b9d82d72', true);
	request.onload = function() {
		if (request.status >=200 && request.status <400) {
		 // Success!
			var responseJSON = JSON.parse(request.responseText);
			console.log(responseJSON);
			document.getElementById("nom").innerHTML = responseJSON.name ;
			document.getElementById("temp").innerHTML = responseJSON.weather[0].description ;
			document.getElementById("temp").innerHTML = (responseJSON.main.temp-273.15).toFixed(0) +" C°";          
			
			document.getElementById("hr").innerHTML = "<hr width='50%'>";
			document.getElementById("hr1").innerHTML = "<hr width='50%'>";
			document.getElementById("hr2").innerHTML = "<hr width='50%'>";
			document.getElementById("hr3").innerHTML = "<hr width='50%'>";
			document.getElementById("hr4").innerHTML = "<hr width='50%'>";
			document.getElementById("hr5").innerHTML = "<hr width='50%'>";
			
			document.getElementById("hum").innerHTML = "Humidity : "+responseJSON.main.humidity+" %";
			document.getElementById("cloud").innerHTML = " Cloud : "+responseJSON.clouds.all+" %";
			document.getElementById("wind").innerHTML = "Wind : "+responseJSON.wind.speed+" m/s";    
			document.getElementById("icon").src ="http://openweathermap.org/img/w/"+responseJSON.weather[0].icon+".png";

		    
			var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+responseJSON.name +"&zoom=13&size=300x300&maptype=roadmap&markers="+responseJSON.name +"";
			document.getElementById("map").innerHTML = '<img src="'+img_url+'"/>';
			
		} else {
			
		}
	};

  request.onerror = function() {

  // There was a connection error of some sort

  };

  request.send();
 }
  
  