<?php
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );

function create_custom_services_post_type(){
	register_post_type('services',
						array(
							'labels' => array(
								'name' => __('Services'),
								'singular_name' => __('Service')
							),
							'public' => true,
							'show_in_admin_bar' => true,
							'show_in_rest' => true
						)
	);
	add_post_type_support('services', array('thumbnail', 'excerpt'));
}
function create_custom_portfolio_post_type(){
	register_post_type('portfolio',
						array(
							'labels' => array(
								'name' => __('Portfolio'),
								'singular_name' => __('Portfolio')
							),
							'public' => true,
							'show_in_admin_bar' => true,
							'show_in_rest' => true
						)
	);
	add_post_type_support('portfolio', array('thumbnail', 'excerpt'));
}
function create_custom_clients_post_type(){
	register_post_type('clients',
						array(
							'labels' => array(
								'name' => __('Clients'),
								'singular_name' => __('Client')
							),
							'public' => true,
							'show_in_admin_bar' => true,
							'show_in_rest' => true
						)
	);
	add_post_type_support('clients', array('thumbnail', 'excerpt'));
}


add_action('init', 'create_custom_services_post_type');
add_action('init', 'create_custom_portfolio_post_type');
add_action('init', 'create_custom_clients_post_type');