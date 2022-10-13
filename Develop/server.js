const express = require("express");
const path = require("path");
const api = require("./routes/index");

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extenden: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname), "/public/index.html")
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);