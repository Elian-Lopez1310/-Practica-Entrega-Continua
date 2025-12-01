const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevOps Hola Mundo</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: radial-gradient(circle at top, #22d3ee 0, #0f172a 45%, #020617 100%);
      color: #e5e7eb;
    }

    .card {
      background: rgba(15, 23, 42, 0.85);
      border-radius: 18px;
      padding: 32px 40px;
      max-width: 520px;
      width: 90%;
      box-shadow:
        0 18px 45px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(148, 163, 184, 0.2);
      backdrop-filter: blur(14px);
      text-align: center;
      border: 1px solid rgba(148, 163, 184, 0.4);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(56, 189, 248, 0.12);
      color: #7dd3fc;
      border: 1px solid rgba(56, 189, 248, 0.6);
      margin-bottom: 16px;
      gap: 6px;
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
    }

    h1 {
      font-size: 2.4rem;
      margin: 0 0 10px 0;
      color: #f9fafb;
    }

    .subtitle {
      font-size: 1rem;
      color: #cbd5f5;
      margin-bottom: 22px;
    }

    .highlight {
      color: #38bdf8;
      font-weight: 600;
    }

    .rocket {
      font-size: 2.3rem;
      margin-bottom: 14px;
      animation: float 2.4s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }

    .details {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 22px;
    }

    .pill {
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 0.8rem;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.6);
      color: #e5e7eb;
    }

    .button {
      display: inline-block;
      margin-top: 8px;
      padding: 10px 22px;
      border-radius: 999px;
      border: none;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      cursor: pointer;
      background: linear-gradient(135deg, #22c55e, #16a34a);
      color: #020617;
      box-shadow: 0 14px 30px rgba(22, 163, 74, 0.45);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }

    .button:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 40px rgba(22, 163, 74, 0.55);
      filter: brightness(1.03);
    }

    .footer {
      margin-top: 18px;
      font-size: 0.8rem;
      color: #9ca3af;
      opacity: 0.9;
    }

    .footer span {
      color: #38bdf8;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">
      <div class="badge-dot"></div>
      DEVOPS PRACTICE • DOCKER • NODE
    </div>
    <div class="rocket">🚀</div>
    <h1>Hola Mundo desde <span class="highlight">DevOps</span></h1>
    <p class="subtitle">
      App web lista para empaquetar en <span class="highlight">Docker</span> y subir a <span class="highlight">Docker Hub</span>.
    </p>

    <div class="details">
      <div class="pill">Node.js + Express</div>
      <div class="pill">Puerto 4000</div>
      <div class="pill">Contenedor listo</div>
    </div>

    <button class="button">
      CICLO DEVOPS INICIADO ✅
    </button>

    <div class="footer">
      Proyecto de práctica de <span>Elian</span>
    </div>
  </div>
</body>
</html>`);
});

app.listen(port, () => {
  console.log("🔥 Servidor corriendo en http://localhost:" + port);
});
