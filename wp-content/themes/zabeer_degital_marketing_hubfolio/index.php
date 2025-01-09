<?php
/*
 * Template for displaying the header
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> - <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <?php
    /*
    <a href="">
         <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="">
    </a>
*/
    ?>

    <a href="">
        <img src="<?php echo get_theme_mod('zabeer_logo');  ?>" alt="">
    </a>

    <?php 
    wp_nav_menu(array('theme_location'=>'main_menu' , 'menu_id' => 'nav'));
    ?> 




    <?php wp_footer(); ?>
</body>

</html>