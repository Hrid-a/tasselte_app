require("dotenv").config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const globalErrorHandler = require('./controllers/errorContrller');
const CustomError = require('./lib/CustomError');
const morgan = require('morgan');
const app = express();


// white list with cors middleware
app.use(cors());

// json, urlencoded middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// cookies parser middleware
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

app.use(morgan('tiny'));
// routes



app.all("*", (req, res, next) => {

    return next(new CustomError("page not found", 404));
})

app.use(globalErrorHandler);

module.exports = app;