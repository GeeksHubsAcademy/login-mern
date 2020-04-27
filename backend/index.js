require('./config/mongoose.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const usersRouter = require('./routes/users')


app.use('/users',usersRouter)
app.listen(PORT, () => console.log('server running on port: ' + PORT));