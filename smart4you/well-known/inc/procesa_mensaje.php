<?php

	$nombre = $_POST["nombre"];  
	$apellido = $_POST["apellido"]; 
	$pais = $_POST["pais"]; 
	$email = $_POST["email"]; 
	$mensaje = $_POST["mensaje"];
	$vlbla_db1 = "contactos";
	$email_to="info@smart4youdesign.com";
	$email_corporativ="Smart4U Informacion <info@smart4youdesign.com>";
	$email_subject="Cotizacion Nebbit";
	$email_message="Han enviado Cotizacion Smart4U.\n\n";
	$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
	$email_message .= "Apellido: " . $_POST['apellido'] . "\n";
	$email_message .= "E-mail: " . $_POST['email'] . "\n";
	$email_message .= "Pais: " . $_POST['pais'] . "\n";
	$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n";

	$bcc="info@smart4youdesign.com";

	 ?><p>Gracias. La informacion ha sido enviada correctamente!</p><?php 

	//Notificaciones 
	$headers = 'From: '.$email."\r\n".
	'Reply-To: '.$email."\r\n" .
	'BCC: '.$bcc."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);

	$email_subj="Informacion Smart4U";
	$email_mess="Gracias por contactarse con Smart4U. Pronto nos pondremos en contacto con usted a la brevedad posible .";
	$WEBSITE="smart4youdesign.com";
	//Envio email a cliente
	$headers ="From: ".$email_corporativ."\r\n".
	'Reply-To: '.$email_corporativ."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email, $email_subj, $email_mess, $headers);          
?>
