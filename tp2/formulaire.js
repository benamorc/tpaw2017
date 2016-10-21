function validation(){
	
	var nom = document.getElementById("nom");
	var prenom = document.getElementById("prenom");
	var date_naissance = document.getElementById("date_naissance");
	var adresse = document.getElementById("adresse");
	var email = document.getElementById("email");
	var sexe = document.getElementById("sexe");
	
	var err = document.getElementById("err");
	var res = document.getElementById("resultat");
	
	
	var mailformat = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	
	if (nom.value==""){
		err.innerHTML = "La saisie du nom est obligatoire";
	}
	
	else if (prenom.value==""){
		err.innerHTML = "La saisie du prénom est obligatoire";
	}
	else if(sexe.value==""){
		sexe.innerHTML = "Veuillez préciser cotre sexe";
	}
	else if (date_naissance.value==""){
		err.innerHTML = "La saisie de la date de naissance est obligatoire";
	}

	else if (adresse.value==""){
		err.innerHTML = "La saisie de l'adresse est obligatoire";
	}
	
	else if (email.value=="" || !mailformat.test(email.value)){
		err.innerHTML = "La saisie d'une @mail valide est obligatoire";
	}
	else{
		res.innerHTML = "bienvenue : " + nom.value;
	}
}
