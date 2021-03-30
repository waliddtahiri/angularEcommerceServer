const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// database connection
const uri = 'mongodb://127.0.0.1:27017/eCommerce';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

//routes
const productRouter = require('./routes/products')

app.use('/products', productRouter);


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})