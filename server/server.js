const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//ip 217.25.198.197
//userName: Taras, password: 170589
//FS_project cluster on mongoDB

require('dotenv').config(); 


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//routes
const userRouter = require('./routes/users');
// const exercisesRouter = require('./routes/exercises');

app.use('/users', userRouter);
// app.use('/exercises', exercisesRouter);



//server
app.listen( port, () => {
    console.log(`this server is running on ${port} port`);
})

