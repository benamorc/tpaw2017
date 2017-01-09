$(function(){
	//$( "#date_naissance" ).datepicker();
	
	
	$("#submitform").click(function(){
		
		if(($("#nom").val()=="")||($("#prenom").val()=="")||($("#date_naissance").val()=="") ||($("#address").val()=="") || ($("#email").val()==""))
		{
            $(".modal-body").html("Veuillez remplir tous les champs du formulaires");
            $(".modal").modal("show");
        }
		else{
			$(".modal-body").html("Bienvenue "+$("#nom").val());
            $(".modal").modal("show");
		}
	});
	
	$( "input.form-control" ).keyup(function() {
        $(this).parent().parent().find(".keyCount").text($(this).val().length);
    });

	var x = document.getElementById("demo");
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		}else{
			alert("Ce navigateur ne supporte pas la géolocalisation");
			}
	}

	function showPosition(position) {
		var latituteLongitude = position.coords.latitude + "," + position.coords.longitude;
		var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latituteLongitude+"&zoom=14&size=400x300&sensor=false";
		document.getElementById("demo").innerHTML = "<img src='"+img_url+"'>";
	}

	function showError(error) {
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
	
	function webStock(){
		if(typeof(Storage) !== "undefined") {
			
			localStorage.setItem("nom", "Ben Amor");
			localStorage.setItem("prenom", "Chaouki");
			localStorage.setItem("date_naissance", "date_naissance");
			localStorage.setItem("address", "address");
			localStorage.setItem("email", "email");
			
			$("#monDiv").html(localStorage.getItem("chaouki.ben.amor@hotmail.com"));
			$("#monDiv").html(localStorage.getItem("nom"));
			$("#monDiv").html(localStorage.getItem("prenom"));
			$("#monDiv").html(localStorage.getItem("date_naissance"));
			$("#monDiv").html(localStorage.getItem("address"));
		} else {
			alert("Désolé, mais le Web Storage n'est pas suppoté");
		}
		
     
    }
});