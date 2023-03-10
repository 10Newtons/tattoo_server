import express from 'express';
import 'dotenv/config';
import { dbConfig } from './models/db';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './router';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await dbConfig.authenticate();
    await dbConfig.sync({ force: true });

    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
