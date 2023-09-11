import express from 'express';
import dotenv from 'dotenv/config';
import { dbConnect } from './config/dbConnect.js';
import bodyParser from 'body-parser';
import todoRouter from './routes/todoListRoute.js'
import cors from 'cors';


const app = express();
// morgan is to show the requests that comes to your server in the terminal
app.use(bodyParser.json({"limit": "30mb", extended: true})); // 30mb because we will send images
app.use(bodyParser.urlencoded({"limit": "30mb", extended: true}));
app.use(cors())
const PORT = process.env.PORT || 4000;
// app.use('/', (req, res) => {
//     res.send('server is running')
// });

app.use('/todo', todoRouter);


app.use('/', async (req, res) => {
    res.json("Server is running")
});


let server = app.listen(PORT, () => {
    console.log('server is running at port ', PORT);
});



dbConnect();