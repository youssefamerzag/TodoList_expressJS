const mongoose = require('mongoose')

const doneTasksSchema = mongoose.Schema({
    id : Number,
    title : String
})

const doneTasks = mongoose.model('doneTasks' , doneTasksSchema);

module.exports = doneTasks;