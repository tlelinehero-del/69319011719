const http = require('http');

const server = http.createServer((req, res) => {
    // กำหนดให้ส่งข้อมูลกลับไปเป็นหน้าเว็บ HTML และรองรับภาษาไทย/ญี่ปุ่น (utf-8)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // โค้ด HTML/CSS ที่เปลี่ยนลิงก์รูปภาพให้เสถียรและโหลดขึ้นแน่นอน
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>CR7 Style Profile with Images</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    /* พื้นหลังไล่เฉดสีดำ-แดงดุดัน */
    background: radial-gradient(circle, #1c0205 0%, #0a0002 100%);
    font-family: "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: white;
    padding: 20px;
}

.card {
    width: 450px;
    background: rgba(10, 5, 5, 0.85);
    border: 3px solid #e51b23;
    border-radius: 25px;
    padding: 40px 30px 30px 30px;
    text-align: center;
    /* แสงนีออนสีแดงรอบการ์ด */
    box-shadow: 0 0 30px rgba(229, 27, 35, 0.6);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 45px rgba(229, 27, 35, 0.9);
}

/* ธงชาติไทยมุมซ้ายบน */
.flag-thailand {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 45px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.6);
    z-index: 10;
}

/* รูปโรนัลโด้ตรงกลาง (คัดสรรลิงก์ใหม่ที่โหลดได้แน่นอน) */
.ronaldo-profile {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #e51b23;
    margin: 10px auto 20px auto;
    display: block;
    box-shadow: 0 0 20px rgba(229, 27, 35, 0.8);
}

h1 {
    color: #e51b23;
    font-family: "Impact", "Segoe UI", sans-serif;
    font-size: 38px;
    margin: 0;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(229, 27, 35, 0.5);
}

.jp-sub {
    color: #ffffff;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 25px;
    opacity: 0.9;
}

.info {
    font-size: 20px;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    padding: 12px 18px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border-left: 5px solid #e51b23;
    text-align: left;
}

.info span {
    color: #ccc;
}

.info b {
    color: #fff;
}

.line {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #e51b23, transparent);
    margin: 30px auto;
}

.footer {
    color: #ffb3c1;
    font-style: italic;
    line-height: 1.6;
}

.siu-text {
    font-family: "Impact", sans-serif;
    color: #ffd700; /* สีทองแชมเปียน */
    font-size: 24px;
    letter-spacing: 2px;
    margin-top: 15px;
    display: block;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}
</style>

</head>
<body>

<div class="card">
    <!-- 🇹🇭 รูปธงชาติไทยมุมซ้ายบน (ใช้ SVG ลิงก์ใหม่ของ Flagcdn) -->
    <img src="https://flagcdn.com/h40/th.png" alt="Thailand Flag" class="flag-thailand">

    <!-- ⚽ รูปโรนัลโด้ตรงกลาง (ใช้ลิงก์สำรองที่มีการเข้ารหัสป้องกันรูปแตกแล้ว) -->
    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=300&h=300" alt="Ronaldo Style Football" class="ronaldo-profile">
    
    <h1>自己紹介</h1>
    <div class="jp-sub">Jikoshoukai (แนะนำตัว)</div>

    <div class="line"></div>

    <!-- ข้อมูลแนะนำตัวของคุณ -->
    <div class="info"><span>👤 ชื่อ :</span> <b>ธนดล แสงทอง</b></div>
    <div class="info"><span>🎓 รหัส :</span> <b>69319011719</b></div>

    <div class="line"></div>

    <div class="footer">
        「よろしくお願いします。」
        <br>
        Yoroshiku Onegaishimasu
        <span class="siu-text">🏆 SIUUUUUUU! 🏆</span>
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
