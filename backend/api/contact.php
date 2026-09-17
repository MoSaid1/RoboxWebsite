<?php
require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_error('Method not allowed', 405);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    json_error('Invalid request body');
}

function clean(string $key, array $data, int $maxLen = 255): string
{
    $v = trim((string)($data[$key] ?? ''));
    return mb_substr($v, 0, $maxLen);
}

$firstName = clean('firstName', $data, 100);
$lastName = clean('lastName', $data, 100);
$email = clean('email', $data, 191);
$phone = clean('phone', $data, 50);
$inquiryType = clean('inquiryType', $data, 100);
$message = clean('message', $data, 5000);
$hearAboutUs = clean('hearAboutUs', $data, 100);
$products = $data['products'] ?? [];
$productsStr = is_array($products) ? implode(', ', array_map('strval', $products)) : (string)$products;

$errors = [];
if ($firstName === '') $errors['firstName'] = 'First name is required';
if ($lastName === '') $errors['lastName'] = 'Last name is required';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'A valid email is required';
if ($message === '') $errors['message'] = 'Message is required';

if ($errors) {
    json_out(['error' => 'Validation failed', 'fields' => $errors], 422);
}

$stmt = db()->prepare(
    'INSERT INTO contact_messages (inquiry_type, first_name, last_name, phone, email, products, message, hear_about_us)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
);
$stmt->execute([$inquiryType, $firstName, $lastName, $phone, $email, $productsStr, $message, $hearAboutUs]);

$to = CONTACT_NOTIFY_EMAIL;
$subject = 'New contact form submission - Robox Industries website';
$body = "Name: $firstName $lastName\n" .
    "Email: $email\n" .
    "Phone: $phone\n" .
    "Inquiry type: $inquiryType\n" .
    "Products: $productsStr\n" .
    "Heard about us via: $hearAboutUs\n\n" .
    "Message:\n$message\n";
$headers = "From: no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'robox-industries.com') . "\r\n" .
    "Reply-To: $email\r\n";
@mail($to, $subject, $body, $headers);

json_out(['success' => true]);
