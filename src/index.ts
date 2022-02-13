import express from "express";
import * as mongoose from 'mongoose';
import TransactionRoutes from './transation/routes'

const app = express();
app.use(express.json());
app.use(TransactionRoutes);
app.get('/healthcheck', (req, res) => {
    res.send('everything ok');
});

// mongoose.connect('mongodb+srv://leandronovaes:53Gst52nybl0qhHy@cluster0.xj0qd.mongodb.net/financial-control?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


const PORT = 3333;

app.listen(PORT || process.env.PORT, () => console.log(`App listening on PORT ${PORT}`));


