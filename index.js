// định nghĩa các biến
const userName = "Nguyễn Ngọc Sơn";
const email = "sonnn@gmail.com";
const phone = "0123456789";
const address = "Đà nẵng, Việt Nam";
const birthDay = "1990-01-01";

// hàm hiển thị thông tin người dùng
function displayUserInfo() {
    console.log("Thông tin người dùng:");
    console.log("Tên:", userName);
    console.log("Email:", email);
    console.log("Số điện thoại:", phone);
    console.log("Địa chỉ:", address);
    console.log("Ngày sinh:", birthDay);
}

// hàm gọi hiển thị thông tin người dùng
function showUserInfo() {
    displayUserInfo();
}

// gọi hàm để hiển thị thông tin người dùng
showUserInfo();