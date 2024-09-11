const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public"));

app.get("/",(req,res)=> {
   res.sendFile(path.join(__dirname,"public","index.html"));
});

const port = process.env.PORT || 3000;
port.listen(port => {
   console.log("Server listen on "+port);
});
