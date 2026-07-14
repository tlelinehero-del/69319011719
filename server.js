const http = require('http');

// 1. สร้าง Server พร้อมดักจับ Request
const server = http.createServer((req, res) => {
    
    // กำหนด Header ให้รองรับ HTML และภาษาไทย
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // 2. ส่งหน้าเว็บสุดเท่แนว Gaming กลับไป
    res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🎮 NEON ARCADE - GAME SERVER</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
                color: #f8fafc;
                font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                overflow: hidden;
            }

            /* เอฟเฟกต์แสงตาราง Grid ด้านหลังแบบเกม Sci-Fi */
            body::before {
                content: "";
                position: absolute;
                width: 200%;
                height: 200%;
                top: -50%;
                left: -50%;
                background-image: 
                    linear-gradient(rgba(0, 255, 204, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px);
                background-size: 30px 30px;
                transform: perspective(500px) rotateX(60deg);
                z-index: 1;
                animation: gridMove 20s linear infinite;
            }

            @keyframes gridMove {
                0% { background-position: 0 0; }
                100% { background-position: 0 100%; }
            }

            /* กล่อง Dashboard หลัก */
            .terminal-box {
                position: relative;
                width: 90%;
                max-width: 650px;
                background: rgba(15, 23, 42, 0.85);
                border: 2px solid #00ffcc;
                border-radius: 16px;
                padding: 40px;
                text-align: center;
                box-shadow: 0 0 30px rgba(0, 255, 204, 0.2), inset 0 0 15px rgba(0, 255, 204, 0.1);
                backdrop-filter: blur(10px);
                z-index: 10;
            }

            /* เส้นสแกนแบบจอคอมพิวเตอร์ยุคเก่า */
            .terminal-box::after {
                content: " ";
                display: block;
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                z-index: 11;
                background-size: 100% 4px, 6px 100%;
                pointer-events: none;
                border-radius: 14px;
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 800;
                color: #00ffcc;
                text-shadow: 0 0 10px rgba(0, 255, 204, 0.6), 0 0 20px rgba(0, 255, 204, 0.3);
                letter-spacing: 2px;
                margin-bottom: 25px;
            }

            .profile-zone {
                background: rgba(2, 6, 17, 0.7);
                border: 1px solid rgba(0, 255, 204, 0.3);
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 30px;
            }

            h2 {
                color: #38bdf8;
                font-size: 1.8rem;
                margin-bottom: 8px;
                text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
            }

            .student-id {
                font-family: 'Courier New', Courier, monospace;
                color: #94a3b8;
                font-size: 1.1rem;
                letter-spacing: 1px;
            }

            .desc {
                color: #cbd5e1;
                font-size: 1.05rem;
                line-height: 1.6;
                margin-bottom: 30px;
            }

            /* สถานะ Server Online แบบกระพริบได้ */
            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: rgba(0, 255, 102, 0.1);
                border: 1px solid #00ff66;
                color: #00ff66;
                padding: 10px 24px;
                border-radius: 50px;
                font-weight: bold;
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
                animation: pulse 2s infinite alternate;
            }

            @keyframes pulse {
                0% { box-shadow: 0 0 10px rgba(0, 255, 102, 0.2); }
                100% { box-shadow: 0 0 25px rgba(0, 255, 102, 0.6); }
            }

            .dot {
                width: 10px;
                height: 10px;
                background-color: #00ff66;
                border-radius: 50px;
                box-shadow: 0 0 8px #00ff66;
            }
        </style>
    </head>
    <body>

        <div class="terminal-box">
            <h1>🎮 CYBER REALM 🎮</h1>

            <div class="profile-zone">
                <h2>ธนดล แสงทอง</h2>
                <p class="student-id">UID: 69319011719</p>
            </div>

            <p class="desc">คอร์เซิร์ฟเวอร์ได้รับการเปิดใช้งานและเชื่อมต่อเข้ากับเครือข่ายระดับโลกผ่านระบบ Railway เรียบร้อยแล้ว ระบบเสถียร 100% พร้อมลุย!</p>

            <div class="status-badge">
                <span class="dot"></span>
                SERVER ONLINE
            </div>
        </div>

    </body>
    </html>
    `);
});

// 3. รันเซิร์ฟเวอร์บน Port ที่เหมาะสม
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[READY] Game Server is deployed on port ${PORT}`);
});
