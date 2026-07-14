// 3.3 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้
res.end(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <style>
        body {
            background-color: #0f172a;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 120px;
        }

        .box {
            width: 700px;
            margin: auto;
            padding: 40px;
            border: 3px solid #00ffcc;
            border-radius: 20px;
            box-shadow: 0 0 20px #00ffcc;
            background-color: #111827;
        }

        h1 {
            color: #00ffcc;
        }

        .status {
            margin-top: 20px;
            color: #00ff66;
            font-size: 24px;
        }
    </style>
</head>

<body>

    <div class="box">
        <h1>🎮 GAME SERVER 🎮</h1>

        <h2>ธนดล แสงทอง</h2>

        <p>รหัสนักศึกษา : 69319011719</p>

        <p>เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วครับผม!</p>

        <div class="status">
            🟢 Server Online
        </div>
    </div>

</body>
</html>
`);
