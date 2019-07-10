const express= require('express');

const connectDB = require('./config/db');

//create an express app
const app = express();
//calling connectDb and hence this would return the connection
connectDB();
//set the middleware to parse data
app.use(express.json({extended:false}));

app.use('/api/tasks', require('./routes/api/task'))
app.use('/api/users', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/categories', require('./routes/api/category'))
const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> {
    console.log('Server Started');
});