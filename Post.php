<?php

$title = 'Bài 1: Giới thiệu về PHP';
$description = 'Bài 1: Giới thiệu về PHP';
$author = 'Nguyễn Ngọc Sơn';
$slug = 'bai-1-gioi-thieu-ve-php';

function showPost(
    $title,
    $description,
    $author,
    $slug
) {
    echo "<h1>$title</h1>";
    echo "<p>$description</p>";
    echo "<p><strong>Author:</strong> $author</p>";
    echo "<p><strong>Slug:</strong> $slug</p>";
}

showPost($title, $description, $author, $slug);
