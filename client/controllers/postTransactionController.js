const postTransaction = (req, res) => {
    const { card_number, card_holder } = req.body;

    // Kiểm tra thông tin đăng nhập (giả sử kiểm tra đơn giản từ dữ liệu tĩnh)
    if (card_number === '123456789' && card_holder === 'John Doe') {
        res.json({ success: true, message: 'Đăng nhập thành công!' });
    } else {
        res.json({ success: false, message: 'Thông tin thẻ không chính xác.' });
    }
};

module.exports = { postTransaction };
