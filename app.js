const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());

// Import router
const indexRouter = require("./routes/index.routes");

//routes
app.use('/api/v1', indexRouter);
app.use('/', indexRouter);
app.use('*', (req, res)=> {
    res.status(404).json({
        status: 404,
        message: 'Endpoint Not Found'
    });
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(port, () => {
    console.log(`🚀 Server running on port: ${port}`)
});

