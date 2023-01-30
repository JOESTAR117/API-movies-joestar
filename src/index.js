import express from 'express';
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json())
app.use(morgan('dev'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
