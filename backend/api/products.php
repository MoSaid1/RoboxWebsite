<?php
require_once __DIR__ . '/bootstrap.php';

$pdo = db();

function attach_relations(PDO $pdo, array $products): array
{
    if (!$products) return [];
    $ids = array_column($products, 'id');
    $placeholders = implode(',', array_fill(0, count($ids), '?'));

    $photos = $pdo->prepare("SELECT product_id, url FROM product_photos WHERE product_id IN ($placeholders) ORDER BY sort_order");
    $photos->execute($ids);
    $photosByProduct = [];
    foreach ($photos->fetchAll() as $row) {
        $photosByProduct[$row['product_id']][] = $row['url'];
    }

    $specs = $pdo->prepare("SELECT product_id, name, detail, icon FROM product_specs WHERE product_id IN ($placeholders) ORDER BY sort_order");
    $specs->execute($ids);
    $specsByProduct = [];
    foreach ($specs->fetchAll() as $row) {
        $specsByProduct[$row['product_id']][] = [
            'name' => $row['name'],
            'detail' => $row['detail'],
            'icon' => $row['icon'],
        ];
    }

    $sections = $pdo->prepare("SELECT product_id, title, text, image FROM product_sections WHERE product_id IN ($placeholders) ORDER BY sort_order");
    $sections->execute($ids);
    $sectionsByProduct = [];
    foreach ($sections->fetchAll() as $row) {
        $sectionsByProduct[$row['product_id']][] = [
            'title' => $row['title'],
            'text' => $row['text'],
            'image' => $row['image'],
        ];
    }

    foreach ($products as &$p) {
        $p['photos'] = $photosByProduct[$p['id']] ?? [];
        $p['specifications'] = $specsByProduct[$p['id']] ?? [];
        $p['sections'] = $sectionsByProduct[$p['id']] ?? [];
    }
    return $products;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_error('Method not allowed', 405);
}

if (!empty($_GET['slug'])) {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE slug = ? AND status = 'Active' LIMIT 1");
    $stmt->execute([$_GET['slug']]);
    $product = $stmt->fetch();
    if (!$product) {
        json_error('Product not found', 404);
    }
    [$product] = attach_relations($pdo, [$product]);
    json_out($product);
}

$category = $_GET['category'] ?? null;
if ($category && $category !== 'all') {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE status = 'Active' AND category = ? ORDER BY sort_order");
    $stmt->execute([$category]);
} else {
    $stmt = $pdo->query("SELECT * FROM products WHERE status = 'Active' ORDER BY sort_order");
}
$products = $stmt->fetchAll();
json_out(attach_relations($pdo, $products));
