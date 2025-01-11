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

    <!-- ==================== Start Loading ==================== -->

    <!-- <div class="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div class="loader-wrap-heading">
            <div class="load-text">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </div>
        </div>
    </div> -->

    <!-- ==================== End Loading ==================== -->

    <div class="cursor"></div>

    <!-- ==================== Start progress-scroll-button ==================== -->

    <div class="progress-wrap cursor-pointer">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>

    <!-- ==================== End progress-scroll-button ==================== -->

    <!-- ==================== Start Navbar ==================== -->

    <nav class="navbar navbar-expand-lg">
        <div class="container">

            <!-- Logo -->
            <a class="logo" href="<?php echo esc_url(home_url('/')); ?>" style="border: none;">
                <img src="<?php echo esc_url(get_theme_mod('zabeer_logo')); ?>" alt="logo" style="width: 75px;">
            </a>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'main_menu',
                    'menu_class'     => 'navbar-nav',
                    'container'      => false,
                    'fallback_cb'    => false,
                ));
                ?>
            </div>

            <div class="topnav d-flex align-items-center">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="butn butn-rounded">
                    <div class="d-flex align-items-center">
                        <span>Start Project</span>
                        <span class="icon ml-10">
                            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/common/imgs/icons/arrow-top-right.svg" alt="">
                        </span>
                    </div>
                </a>
                <div class="menu-icon cursor-pointer">
                    <span class="icon ti-align-right"></span>
                </div>
            </div>
        </div>
    </nav>

    <div class="hamenu">
        <div class="close-menu cursor-pointer ti-close"></div>
        <div class="container-fluid rest d-flex">
            <div class="menu-links">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'main_menu',
                    'menu_class'     => 'main-menu rest',
                    'container'      => false,
                    'fallback_cb'    => false,
                ));
                ?>
            </div>
            <div class="cont-info valign">
                <div class="text-center full-width">
                    <div class="logo">
                        <img src="<?php echo esc_url(get_theme_mod('zabeer_logo')); ?>" alt="" style="width: 75px;">
                    </div>
                    <div class="social-icon mt-40">
                        <a href="https://www.facebook.com/profile.php?id=61567880623368"> <i class="fab fa-facebook-f"></i> </a>
                        <a href="#"> <i class="fab fa-linkedin-in"></i> </a>
                        <a href="https://www.instagram.com/wk.pages/profilecard/?igsh=a3dmZ3p4Z3J0bHU5"> <i class="fab fa-instagram"></i> </a>
                    </div>
                    <div class="item mt-10">
                        <h5><a href="mailto:vkachmar@outlook.com">vkachmar@outlook.com</a></h5>
                        <h5 class="underline"><a href="tel:+48518922121">+48 518 922 121</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ==================== End Navbar ==================== -->

    <?php wp_footer(); ?>
</body>

</html>
