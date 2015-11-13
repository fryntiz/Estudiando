function almacenarCookie(nombre, valor, caducidad, dominio, ruta, segura) {
	var cookie;
	// A�adimos el nombre de la cookie y su valor
	cookie = nombre + "=" + escape(valor);
	// Comprobamos si hemos recibido caducidad
	if (arguments[2] != undefined) {
		cookie += "; expires=" + caducidad.toGMTString();
	}
	// Comprobamos si hemos recibido dominio
	if (arguments[3] != undefined) {
		cookie += "; domain=" + dominio;
	}
	// Comprobamos si hemos recibido ruta
	if (arguments[4] != undefined) {
		cookie += "; path=" + ruta;
	}
	// Comprobamos si hemos recibido segura y si hay que a�adirla
	if (arguments[5] != undefined && segura) {
		cookie += "; secure";
	}
	// A�adimos la cookie
	document.cookie = cookie;
}

function recuperarCookie(nombreCookie) {
	// Definici�n de variables
	var posicionCookie, posicionPuntoComa;
	var posicionInicio, posicionFin;
	var valorCookie = "";
	// Comprobamos si hay cookies
	if (document.cookie.length > 0) {
		// Buscamos la posici�n de la cookie
		posicionCookie = document.cookie.indexOf(nombreCookie + "=");
		// Si hemos encontrado la posici�n
		if (posicionCookie != -1) {
			// Calculamos la posici�n de inicio del valor
			posicionInicio = posicionCookie + nombreCookie.length + 1;
			// Buscamos la posici�n del punto y coma m�s pr�ximo
			posicionPuntoComa = document.cookie.indexOf(";", posicionCookie);
			// Si estamos en la �ltima cookie (no hay punto y coma)
			if (posicionPuntoComa == -1) {
				// Leemos hasta el final de la cadena
				posicionFin = document.cookie.length;
			} else {
				// En otro caso, leemos hasta el punto y coma
				posicionFin = posicionPuntoComa;
			}
			// Obtenemos el valor de la cookie
			valorCookie = document.cookie.substring(posicionInicio, posicionFin);
		}
	}
	// Devolvemos el valor de la cookie
	return unescape(valorCookie);
}