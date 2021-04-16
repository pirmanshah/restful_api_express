const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Import router
const indexRouter = require("./routes/index.routes");

//routes
app.use('/api/v1', indexRouter);
app.use('*', (req, res)=> {
    res.status(404).json({
        status: 404,
        message: 'Endpoint Not Found'
    });
})

app.listen(port, () => {
    console.log(`🚀 Server running on port: ${port}`)
})