const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname,"index.js")));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap'));


app.get("/*", (req,res) =>{
      res.sendFile(path.resolve(__dirname,"index.html"))
})

app.listen(process.env.PORT || 5500 , () => console.log("Running on port 5500"))
