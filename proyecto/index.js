function validar_formulario()
{
	var nombre 		= document.getElementById("nombre").value;
	var password 	= document.getElementById("clave").value;
	var password2 	= document.getElementById("confirm_clave").value;
	var correo 		= document.getElementById("email").value;
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

	if(nombre == '' || /^[0-9]+$/.test(nombre) ) //validar nombre: no vacío, solo letras
	{
		document.getElementById("er1").classList.remove("oculto");
		document.getElementById("nombre").classList.add("error-red");
		document.getElementById("txt-err1").classList.remove("oculto");
		return false;
	}

	document.getElementById("er1").classList.add("oculto");
	document.getElementById("ok1").classList.remove("oculto");
	document.getElementById("nombre").classList.remove("error-red");
	document.getElementById("nombre").classList.add("ok-green");
	document.getElementById("txt-err1").classList.add("oculto");

	if ( correo == ''){ // validar correo: no vacío
		document.getElementById("er2").classList.remove("oculto");
		document.getElementById("email").classList.add("error-red");
		document.getElementById("txt-err2").classList.remove("oculto");
		return false;

	} else if (!email_regex.test(correo)) { 
		// validar correo que cumpla con el formato
			document.getElementById("er2").classList.remove("oculto");
			document.getElementById("email").classList.add("error-red");
			text = "Incluye un signo @ en la dirección de correo electrónico. La dirección " + correo + " no incluye el signo @";
			return false;
	} 
   // correo válido
	document.getElementById("er2").classList.add("oculto");
	document.getElementById("ok2").classList.remove("oculto");
	document.getElementById("email").classList.remove("error-red");
	document.getElementById("email").classList.add("ok-green");
	document.getElementById("txt-err2").classList.add("oculto");


	if(password == '' ) // validar contraseña: no vacía
	{
		document.getElementById("er3").classList.remove("oculto");
		document.getElementById("clave").classList.add("error-red");
		document.getElementById("txt-err3").classList.remove("oculto");
		return false;
	
	} else if (password.length > 8) {
		document.getElementById("er3").classList.remove("oculto");
		document.getElementById("clave").classList.add("error-red");
		document.getElementById("txt-err5").classList.remove("oculto");
		return false;
	}

	document.getElementById("er3").classList.add("oculto");
	document.getElementById("ok3").classList.remove("oculto");
	document.getElementById("clave").classList.remove("error-red");
	document.getElementById("clave").classList.add("ok-green");
	document.getElementById("txt-err3").classList.add("oculto");
	document.getElementById("txt-err5").classList.add("oculto");

	if(password2 == '')
	{
		document.getElementById("er4").classList.remove("oculto");
		document.getElementById("confirm_clave").classList.add("error-red");
		document.getElementById("txt-err4").classList.remove("oculto");
		return false;
	}

	if (password != password2) {
		document.getElementById("er4").classList.remove("oculto");
		document.getElementById("confirm_clave").classList.add("error-red");
		document.getElementById("txt-err6").classList.remove("oculto");
		return false;
	}

	document.getElementById("er4").classList.add("oculto");
	document.getElementById("ok4").classList.remove("oculto");
	document.getElementById("confirm_clave").classList.remove("error-red");
	document.getElementById("confirm_clave").classList.add("ok-green");
	document.getElementById("txt-err4").classList.add("oculto");
	document.getElementById("txt-err6").classList.add("oculto");

	alert ("La inscripción se ha realizado con éxito");
}


