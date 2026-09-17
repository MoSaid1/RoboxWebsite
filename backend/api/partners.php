<?php
require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_error('Method not allowed', 405);
}

$stmt = db()->query("SELECT name, logo FROM partners ORDER BY sort_order");
json_out($stmt->fetchAll());
