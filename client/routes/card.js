// script.js

// Function to handle button click
function handleButtonClick() {
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const expirationMM = document.getElementById('expiration-mm').value;
    const expirationYY = document.getElementById('expiration-yy').value;
    const cvv = document.getElementById('cvv').value;

    // Có thể thực hiện các bước xử lý dữ liệu thẻ ở đây
    console.log('Card Number:', cardNumber);
    console.log('Card Holder:', cardHolder);
    console.log('Expiration MM:', expirationMM);
    console.log('Expiration YY:', expirationYY);
    console.log('CVV:', cvv);
   
}
function handleButtonClick() {
    // Chuyển hướng đến trang atm.html
    window.location.href = 'atm.html';
}
// Thêm sự kiện lắng nghe cho nút nhấn
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button-1');
    button.addEventListener('click', handleButtonClick);

    // Thiết lập sự kiện cho liên kết "FORGOT CVV?"
    const cvvLink = document.querySelector('.text-cvv');
    cvvLink.addEventListener('click', () => {
        window.location.href = 'forget.html'; // Đường dẫn đến trang quên CVV
    });
});
