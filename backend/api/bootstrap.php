<?php
// Shared bootstrap: CORS headers + JSON error handling. Required by every endpoint.

require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$allowed = ALLOWED_ORIGINS;
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($allowed === '*') {
    header('Access-Control-Allow-Origin: *');
} else {
    $list = array_map('trim', explode(',', $allowed));
    if (in_array($origin, $list, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function json_out($data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function json_error(string $message, int $status = 400): void
{
    json_out(['error' => $message], $status);
}

set_exception_handler(function (Throwable $e) {
    error_log($e->getMessage());
    json_error('Server error', 500);
});
