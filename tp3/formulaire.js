$( function() {
	
	
	$("#date_naissance").datepicker({
		dateFormat: 'dd/mm/yy',
		maxDate:'-16y'
	});
	
	$("#submit").click(function(){
		if(($("#nom").val()=="")||($("#prenom").val()=="")||($("#date_naissance").val()=="")
			||($("#adress").val()=="") || ($("#email").val()=="")){
				$('.modal-body').html("Veuillez remplir tous les champs du formulaires");
				$('.modal').modal('show');
		}
		else{
			$('.modal-title').html("Bienvenue "+$("#nom").val());
			$('.modal-body').html("Vous etes né le "+$("#date_naissance").val() 
			+" et  vous habitez  "+  $("#adress").val()
            +"<img src='https://maps.googleapis.com/maps/api/staticmap?center="+$("#adress").val()+"&markers="+$("#adress").val()+"&size=300x300'/>"); 
			$('.modal').modal('show');
		}
	});
		
});
	
	