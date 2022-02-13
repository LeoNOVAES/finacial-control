import config from "./config/config"
import express from "express";
import mongoose from 'mongoose';
import TransactionRoutes from './transation/routes'

const app = express();
app.use(express.json());
app.use(TransactionRoutes);

app.get('/healthcheck', (req, res) => {
    res.send('everything ok');
});

mongoose.connect(config.MONGO_URL);

const PORT = 3333;

app.listen(PORT || process.env.PORT, () => console.log(`App listening on PORT ${PORT}`));


