<?php
  /* A�adir el uso de la sidebar */
	if (function_exists('register_sidebar')) {
		register_sidebar();
	}
	/* A�adir una ubicaci�n de men�  */
	if (function_exists('register_nav_menus')) {
		register_nav_menus(
			array(
				'principal' => 'Men&#250; principal'
			)
		);
	}

?>