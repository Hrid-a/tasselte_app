const app = require('./app');
const connectToDB = require('./config/db');

// connect to db;
connectToDB();

//imgae hoster config


const server = app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));


// 