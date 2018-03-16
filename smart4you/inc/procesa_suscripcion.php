<?php

	$nombre = $_POST["fullName"];
	$email = $_POST["email"];
	$vlbla_db1 = "contactos";
	$email_to="info@smart4youdesign.com";
	$email_corporativ="Smart4U Informacion <info@smart4youdesign.com>";
	$email_subject="Suscripción Smart4U";
	$email_message="Alguien se suscribió al blog Smart4U.\n\n";
	$email_message .= "Nombre: " . $_POST['fullName'] . "\n";
	$email_message .= "E-mail: " . $_POST['email'] . "\n";

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
