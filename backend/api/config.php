<?php
// Database connection settings.
// Fill these in with the values from Hostinger hPanel > Databases > MySQL Databases.
// The DB host on Hostinger shared hosting is almost always "localhost".

define('DB_HOST', 'localhost');
define('DB_NAME', 'u000000000_robox');   // <-- replace with your real database name
define('DB_USER', 'u000000000_robox');   // <-- replace with your real database user
define('DB_PASS', 'REPLACE_ME');          // <-- replace with your real database password

// Comma-separated list of origins allowed to call this API.
// Add your real domain(s) here once the frontend is live, e.g.:
// 'https://robox-industries.com,https://www.robox-industries.com'
define('ALLOWED_ORIGINS', '*');

// Email address that receives contact form submissions.
define('CONTACT_NOTIFY_EMAIL', 'info@robox-industries.com');

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    return $pdo;
}
