const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ultimate Space Cyber Profile</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100vh;
    background: radial-gradient(circle, #0d001a 0%, #030008 100%);
    font-family: "Segoe UI", -apple-system, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* เอฟเฟกต์ฝุ่นดาวระยิบระยับข้างหลัง (สร้างด้วย CSS) */
body::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
    background-size: 550px 550px, 350px 350px, 250px 250px;
    background-position: 0 0, 40px 60px, 130px 270px;
    animation: starTravel 120s linear infinite;
    opacity: 0.5;
    z-index: 1;
}

@keyframes starTravel {
    from { transform: translateY(0); }
    to { transform: translateY(-50%); }
}

/* การ์ดโฮโลแกรม 3D */
.card-wrapper {
    position: relative;
    z-index: 10;
    perspective: 1000px;
}

.card {
    width: 430px;
    background: rgba(10, 5, 20, 0.75);
    border: 2px solid #00f0ff;
    border-radius: 24px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 
        0 0 20px rgba(0, 240, 255, 0.3),
        inset 0 0 20px rgba(255, 0, 128, 0.2);
    backdrop-filter: blur(15px);
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform-style: preserve-3d;
}

/* เอฟเฟกต์ขยับเมื่อเอาเมาส์จี้ */
.card:hover {
    transform: rotateX(5deg) rotateY(-5deg) translateY(-10px);
    border-color: #ff007f;
    box-shadow: 
        0 0 40px rgba(255, 0, 127, 0.6),
        inset 0 0 30px rgba(0, 240, 255, 0.3);
}

/* โลโก้กลวงเรืองแสง (CSS pure) */
.neon-portal {
    width: 100px;
    height: 100px;
    margin: 0 auto 25px auto;
    border-radius: 50%;
    background: radial-gradient(circle, #ff007f 10%, transparent 70%);
    border: 3px double #00f0ff;
    box-shadow: 0 0 30px #00f0ff, inset 0 0 20px #ff007f;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotatePortal 8s linear infinite;
}

.neon-portal-inner {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px dashed #ff007f;
    animation: rotateCounter 4s linear infinite;
}

@keyframes rotatePortal {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes rotateCounter {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
}

h1 {
    font-family: 'Impact', sans-serif;
    font-size: 42px;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    background: linear-gradient(45deg, #00f0ff, #ff007f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 8px rgba(0,240,255,0.5));
}

.sub {
    color: #ff007f;
    font-family: monospace;
    font-size: 14px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 0 0 5px #ff007f;
}

/* แถบข้อมูลสไตล์ UI ล้ำยุค */
.cyber-info {
    font-size: 18px;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(0, 240, 255, 0.15);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
}

.cyber-info::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #00f0ff;
}

.cyber-info:hover {
    background: rgba(0, 240, 255, 0.05);
    border-color: #00f0ff;
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
    transform: scale(1.02);
}

/* สลับสีให้แถบที่สอง */
.cyber-info.pink::before {
    background: #ff007f;
}
.cyber-info.pink:hover {
    background: rgba(255, 0, 127, 0.05);
    border-color: #ff007f;
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.2);
}

.cyber-info span {
    color: #888;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cyber-info b {
    color: #fff;
    text-shadow: 0 0 5px rgba(255,255,255,0.5);
}

.divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #00f0ff, #ff007f, transparent);
    margin: 30px 0;
}

.footer {
    font-size: 15px;
    color: #00f0ff;
    text-shadow: 0 0 10px rgba(0,240,255,0.5);
    font-style: italic;
    line-height: 1.6;
}

.glow-btn {
    display: inline-block;
    margin-top: 15px;
    padding: 8px 20px;
    background: transparent;
    border: 1px solid #ff007f;
    color: #ff007f;
    border-radius: 50px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 5px #ff007f;
    box-shadow: 0 0 10px rgba(255,0,127,0.2);
    animation: pulseGlow 2s infinite;
}

@keyframes pulseGlow {
    0% { box-shadow: 0 0 5px rgba(255,0,127,0.2); }
    50% { box-shadow: 0 0 20px rgba(255,0,127,0.6); }
    100% { box-shadow: 0 0 5px rgba(255,0,127,0.2); }
}
</style>

</head>
<body>

<div class="card-wrapper">
    <div class="card">
        <!-- 🌀 พอร์ทัลเรืองแสงแบบ CSS หมุนได้ -->
        <div class="neon-portal">
            <div class="neon-portal-inner"></div>
        </div>
        
        <h1>自己紹介</h1>
        <div class="sub">// USER PROFILE //</div>

        <div class="divider"></div>

        <!-- ข้อมูลแนะนำตัวของคุณ -->
        <div class="cyber-info">
            <span>👤 NAME</span>
            <b>ธนดล แสงทอง</b>
        </div>
        
        <div class="cyber-info pink">
            <span>🎓 STUDENT ID</span>
            <b>69319011719</b>
        </div>

        <div class="divider"></div>

        <div class="footer">
            「よろしくお願いします。」
            <br>
            Yoroshiku Onegaishimasu
            <br>
            <span class="glow-btn">SYSTEM ONLINE</span>
        </div>
    </div>
</div>

</body>
</html>
    `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Ultimate Space Cyber Server is running on port ${PORT}`);
});
