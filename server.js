const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

/*  */

app.get("/sikeres-feliratkozas", (req, res) => {
    res.send("teszt");
});

app.post("/registration", (req, res) => {
    
    // db-be letárolja user adatait
    // vissyaigayoló emailt küld
    //..
    // redirect (GET "/sikeres-feliratkoyas")
});


app.listen(process.env.PORT || 7600, () => console.log("Server running"));