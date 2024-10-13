// Lấy các phần tử cần thiết
const inputMoneyDisplay = document.querySelector('.container-text-money'); // Khung hiển thị tiền
const numberButtons = document.querySelectorAll('.button-number, .button-number-1'); // Các nút số
const clearButton = document.querySelector('.button-clear'); // Nút xóa
const enterButton = document.querySelector('.button-enter'); // Nút xác nhận
const topUpButton = document.querySelector('.button-topup'); // Nút nạp tiền
const withdrawButton = document.querySelector('.button-withdraw'); // Nút rút tiền
const backButton = document.querySelector('.container-button-back'); // Nút trở về
const balanceDisplay = document.querySelector('.container-close'); // Khung hiển thị số dư

let enteredAmount = '';
let balance = 1000000; // Số dư ban đầu là 1 triệu VNĐ
let transactionMode = ''; // Chế độ giao dịch: 'topup' hoặc 'withdraw'

// Hàm định dạng số thành tiền tệ
function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // định dạng số tiền
}

function updateDisplay() {
    // Giới hạn số ký tự hiển thị
    if (enteredAmount.length > 12) {
        enteredAmount = enteredAmount.slice(0, 12); // Giới hạn tối đa 12 ký tự
    }
    inputMoneyDisplay.textContent = formatCurrency(enteredAmount || '0');
}

// Xử lý sự kiện khi nhấn nút số
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (transactionMode) { // Chỉ cho phép nhập số nếu đã chọn chế độ
            enteredAmount += button.textContent; // Thêm số vào enteredAmount
            updateDisplay(); // Cập nhật hiển thị
        }
    });
});

// Xử lý sự kiện khi nhấn nút xóa
if (clearButton) {
    clearButton.addEventListener('click', () => {
        console.log("Nút xóa đã được nhấn");
        enteredAmount = ''; // Xóa số đã nhập
        updateDisplay(); // Cập nhật hiển thị
    });
}

// Xử lý sự kiện khi nhấn nút xác nhận
if (enterButton) {
    enterButton.addEventListener('click', () => {
        if (transactionMode) {
            if (transactionMode === 'topup') {
                alert(`Nạp tiền thành công: ${formatCurrency(enteredAmount)}`);
            } else if (transactionMode === 'withdraw') {
                alert(`Rút tiền thành công: ${formatCurrency(enteredAmount)}`);
            }
            enteredAmount = ''; // Reset số tiền
            transactionMode = ''; // Reset chế độ giao dịch
            updateDisplay(); // Cập nhật hiển thị
        } else {
            alert("Vui lòng chọn Nạp tiền hoặc Rút tiền trước.");
        }
    });
}

// Xử lý sự kiện khi nhấn nút nạp tiền
if (topUpButton) {
    topUpButton.addEventListener('click', () => {
        transactionMode = 'topup'; // Đặt chế độ là nạp tiền
        alert("Bạn đang trong chế độ nạp tiền.");
        enteredAmount = ''; // Reset số tiền
        updateDisplay(); // Cập nhật hiển thị
    });
}

// Xử lý sự kiện khi nhấn nút rút tiền
if (withdrawButton) {
    withdrawButton.addEventListener('click', () => {
        transactionMode = 'withdraw'; // Đặt chế độ là rút tiền
        alert("Bạn đang trong chế độ rút tiền.");
        enteredAmount = ''; // Reset số tiền
        updateDisplay(); // Cập nhật hiển thị
    });
}

// Xử lý sự kiện khi nhấn nút trở về
const Button = document.getElementById('backButton');
backButton.addEventListener('click', () => {
    window.location.href = 'card.html'; 
});
// Chức năng hiển thị số dư
function toggleVisibility() {
    const amount = document.getElementById('amount');
    const hiddenAmount = document.getElementById('hidden-amount');

    if (amount.classList.contains('hidden')) {
        amount.classList.remove('hidden');
        hiddenAmount.classList.add('hidden');
    } else {
        amount.classList.add('hidden');
        hiddenAmount.classList.remove('hidden');
    }
    
    // Cập nhật nội dung hiển thị
    amount.textContent = formatCurrency(balance); // Hiển thị số dư đã định dạng
}
