// Importation du module http nécessaire à la création du serveur
const http = require("http");

// Création du serveur
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bonjour tout le monde!");
});

// Définition du numéro de Port pour notre serveur
const PORT = 4040;
server.listen(PORT, () => {
  console.log(`Serveur accessible sur http://localhost:${PORT}/`);
});
