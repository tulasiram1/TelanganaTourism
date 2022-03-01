const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const tourRoute = require('./routes/tourRoute');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(() => {
    console.log('DATABASE Connected successfully');
}).catch((err) => {
    console.log("Problem in connecting DataBase", err);
});
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/images')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// console.log(req);
// console.log(1);
app.use('/', tourRoute);
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})