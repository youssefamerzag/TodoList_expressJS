const mongoose = require('mongoose')

const tasksSchema = mongoose.Schema({
    id : Number,
    title : String,
})

const tasks = mongoose.model('tasks' , tasksSchema)

module.exports = tasks;