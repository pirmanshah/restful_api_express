const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(port, () => {
    console.log(`🚀 Server running on port: ${port}`)
})