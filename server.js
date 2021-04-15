// Dépendances
require("colors");
require("./config/db");
const morgan = require("morgan")
const path = require("path");
const express = require("express");
const indexRoutes = require("./routes");

// Déclarations des variables
const app = express();
const port = process.env.PORT || 8080;

// Setters
app.set("view engine", "pug"); // Définit l'extension par défaut.
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded( {extended: false }))

// Routing
app.use(indexRoutes)

// Utilisation d'une méthode pour définir le port.
app.listen(port, () => {
  console.log(`
    \n\tServeur démarré sur le port ${port}
  `.bgCyan.white.bold)
})
