const http = require('http');

const server = http.createServer((req, res) => {
    // กำหนดให้ส่งข้อมูลกลับไปเป็นหน้าเว็บ HTML และรองรับภาษาไทย/ญี่ปุ่น (utf-8)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // ใส่โค้ดหน้าโปรไฟล์ญี่ปุ่นของคุณลงไปในนี้เลย!
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Japanese Profile</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: linear-gradient(135deg, #111, #8B0000);
    font-family: "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}

.card {
    width: 420px;
    background: rgba(0,0,0,.75);
    border: 3px solid #ff2d55;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 0 25px #ff2d55;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 35px #ff4d6d;
}

h1 {
    color: #ff4d6d;
    font-size: 36px;
    margin-bottom: 5px;
}

.jp {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 20px;
}

.info {
    font-size: 20px;
    margin: 12px 0;
}

.line {
    width: 80%;
    height: 2px;
    background: #ff2d55;
    margin: 20px auto;
}

.footer {
    color: #ffb3c1;
    font-style: italic;
}
</style>

</head>
<body>

<div class="card">
    <h1>自己紹介</h1>
    <div class="jp">Jikoshoukai (แนะนำตัว)</div>

    <div class="line"></div>

    <div class="info">👤 ชื่อ : <b>ธนดล แสงทอง</b></div>
    <div class="info">🎓 รหัสนักเรียน : <b>69319011719</b></div>

    <div class="line"></div>

    <div class="footer">
        「よろしくお願いします。」
        <br>
        Yoroshiku Onegaishimasu
    </div>
</div>

</body>
</html>
    `);
});

// ให้เซิร์ฟเวอร์รันบน Port ที่ Railway กำหนดให้
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running beautifully on port ${PORT}`);
});
