const express = require("express")
const PORT = 5050 || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})