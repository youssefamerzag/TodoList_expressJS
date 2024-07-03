const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todolist' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
        .then(() => {
            console.log('mongodb connected');
        })

