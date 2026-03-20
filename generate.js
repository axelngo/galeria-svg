const fs = require("fs");

const files = fs.readdirSync("./svg");

const images = files
  .filter(f => f.endsWith(".svg"))
  .map(f => `<img src="svg/${f}">`)
  .join("\n");

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial; text-align: center; background:#f5f5f5;}
    .galeria {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    img {
      width: 100%;
      background: white;
      padding: 10px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
<h1>Galería SVG</h1>
<div class="galeria">
${images}
</div>
</body>
</html>
`;

fs.writeFileSync("index.html", html);
