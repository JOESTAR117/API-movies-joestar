import express from 'express';
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routes from './routes/main.routes.js';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
app.use('/',routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
