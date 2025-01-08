<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'volodymi' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bzJc08PVu1pIXQT4DCMg1ap4XArPNUBApsHOldTI49FZSJXFlSBM1yL3MMdIu6Af' );
define( 'SECURE_AUTH_KEY',  'rX719PshsgoNmC8SkXJnCXjRZwB7XYIpM1VvL3j1taaXSeaNRzyAbtsz1pitOyvN' );
define( 'LOGGED_IN_KEY',    'lnoZkLZ7NEFKxLzdDp35th9o2PnrGAQxcJH2szqQQUq6TxQu96JHq3SQiRWKTkMO' );
define( 'NONCE_KEY',        'b0ZOJpPw2Jau0txj24f13QNdIQABuOCdNv5ule0reVD45kMWwTBQPSUp6slqBFhy' );
define( 'AUTH_SALT',        'cTD5xVIbAK1OouU089LatEYaqHuf3fpeSaF5Bw3LC7YsJHX8yNmRIT66mDtRrl76' );
define( 'SECURE_AUTH_SALT', 'hiXt9Kjhe5DkbWKe82o5cdlPsOX4t7xILOFFFHik2Zm1fBUwroqOqDEu7GPSDsIS' );
define( 'LOGGED_IN_SALT',   'qnY1wRzN1I43vQ4z2J8HewSdPcY1PlZDuq5ivKX8pAMGA2BbdHMJX7zBmArtd25U' );
define( 'NONCE_SALT',       'HKlOvzd0YY38VCipJ55PQjM2R98hZp8sSZi1WynpPBhEBwNjJoJx92g8AewdxtZs' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
