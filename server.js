const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Erlaubt JSON-Daten
app.use(express.json());

// Öffnet den Ordner public
app.use(express.static(path.join(__dirname, "public")));

// Startseite
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server starten
app.listen(PORT, () => {
    console.log("NOCTRA Server gestartet");
    console.log("http://localhost:" + PORT);
});