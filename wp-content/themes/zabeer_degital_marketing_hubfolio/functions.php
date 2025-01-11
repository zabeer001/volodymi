<?php
/*
* my theme functions 
*/

// Theme Title 
add_theme_support("title-tag");

// Theme CSS and jquery files calling 

function zabeer_css_js_file_calling() {
    // Enqueue Styles
    wp_enqueue_style('zabeer-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('plugin', get_template_directory_uri() . '/common/css/plugins.css', array(), '3.7.1', 'all');
    wp_enqueue_style('common_style', get_template_directory_uri() . '/common/css/common_style.css', array(), '3.7.1', 'all');
    wp_enqueue_style('home2-style', get_template_directory_uri() . '/assets/css/home2-style.css', array(), '3.7.1', 'all');

    // Enqueue Scripts
    wp_enqueue_script('jquery'); // WordPress jQuery
    wp_enqueue_script('wow', get_template_directory_uri() . '/common/js/lib/wow.min.js', array('jquery'), '3.7.1', true);
    wp_enqueue_script('scrollit', get_template_directory_uri() . '/common/js/lib/scrollIt.min.js', array('jquery'), '3.7.1', true);
    wp_enqueue_script('isotope', get_template_directory_uri() . '/common/js/lib/isotope.pkgd.min.js', array('jquery'), '3.7.1', true);
    wp_enqueue_script('gsap_min', get_template_directory_uri() . '/common/js/gsap_lib/gsap.min.js', array('jquery'), '3.7.1', true);
    wp_enqueue_script('common_scripts', get_template_directory_uri() . '/common/js/common_scripts.js', array('jquery', 'wow', 'scrollit', 'isotope'), '3.7.1', true);
    wp_enqueue_script('main_script', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery', 'scrollit', 'swiper'), '3.7.1', true);
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

