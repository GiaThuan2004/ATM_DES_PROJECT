document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const card_number = document.getElementById('card_number').value;
    const card_holder = document.getElementById('card_holder').value;
  
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ card_number, card_holder }),
      });
  
      const result = await response.json();
  
      if (response.status === 200) {
        document.getElementById('response').innerText = `Đăng nhập thành công: ${result.data.card_holder}`;
      } else {
        document.getElementById('response').innerText = `Lỗi: ${result.message}`;
      }
    } catch (error) {
      document.getElementById('response').innerText = 'Lỗi khi kết nối đến server';
    }
  });
  