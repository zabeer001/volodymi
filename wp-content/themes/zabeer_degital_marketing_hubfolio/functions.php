<?php
/*
* my theme functions 
*/

// Theme Title 
add_theme_support("title-tag");

// Theme CSS and jquery files calling 

function zabeer_css_js_file_calling() {
    // Enqueue main stylesheet
    wp_enqueue_style('zabeer-style', get_stylesheet_uri());

    // Register styles with dependencies, versioning, and media types
    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css', array(), '5.3.3', 'all');
    wp_register_style('custom', get_template_directory_uri() . '/css/custom.css', array(), '1.0.0', 'all');

    // Enqueue registered styles
    wp_enqueue_style('bootstrap');
    wp_enqueue_style('custom');

    // Ensure jQuery is loaded properly (WordPress has jQuery bundled)
    wp_enqueue_script('jquery');

    // Register Bootstrap JS (set 'true' to load in footer)
    wp_register_script('bootstrap-js', get_template_directory_uri() . '/js/bootstrap.js', array('jquery'), '5.3.3', true);
    
    // Enqueue the Bootstrap script
    wp_enqueue_script('bootstrap-js');
}
add_action('wp_enqueue_scripts', 'zabeer_css_js_file_calling');


//theme function 
function zabeer_customizer_register($wp_customize){
    $wp_customize->add_section('zabeer_header_area', array(
        'title'=> __('Header Area','zabeer'),
        'description'=> 'If you are interested in updating the header section, do it here.',
    ));

    $wp_customize->add_setting('zabeer_logo', array(
        'default'=> get_bloginfo('template_directory').'/img/logo.svg',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'zabeer_logo', array(
        'label' => 'Logo Upload',
        'description' => 'if you want to change the logo. update here',
        'setting' => 'zabeer_logo',
        'section' => 'zabeer_header_area',
    )));
}

add_action('customize_register', 'zabeer_customizer_register');

//register nav menu

register_nav_menu('main_menu', __('Main Menu', 'zabeer'));

