const mongoose = require('mongoose');
const mongo_URI = process.env.mongo_URI || 'mongodb://localhost:27017/login-mern'
mongoose.connect(mongo_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=>console.log('Successfully conected to MongoDB'))
.catch(console.error)