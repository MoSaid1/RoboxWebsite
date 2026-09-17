<?php
require_once __DIR__ . '/bootstrap.php';

$pdo = db();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_error('Method not allowed', 405);
}

if (!empty($_GET['slug'])) {
    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = ? LIMIT 1");
    $stmt->execute([$_GET['slug']]);
    $blog = $stmt->fetch();
    if (!$blog) {
        json_error('Blog post not found', 404);
    }
    $sections = $pdo->prepare("SELECT title, text, photo FROM blog_sections WHERE blog_id = ? ORDER BY sort_order");
    $sections->execute([$blog['id']]);
    $blog['sections'] = $sections->fetchAll();
    json_out($blog);
}

$stmt = $pdo->query("SELECT id, slug, title, excerpt, photo, created_at FROM blogs ORDER BY created_at DESC");
json_out($stmt->fetchAll());
