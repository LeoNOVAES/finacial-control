import express from "express";
import TransactionRoutes from './transation/routes'

const app = express();
app.use(express.json());
app.use(TransactionRoutes);
app.get('/healthcheck', (req, res) => {
    res.send('everything ok');
});

const PORT = 3333;

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


