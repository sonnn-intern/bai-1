<?php

$fullName = 'Nguyễn Ngọc Sơn';
$age = 20;
$email = 'nns@gmail.com';

function showInfo($fullName, $age, $email) 
{
    echo "Họ và tên: $fullName <br>";
    echo "Tuổi: $age <br>";
    echo "Email: $email <br>";
}

showInfo($fullName, $age, $email);