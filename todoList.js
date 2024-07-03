const express = require('express');
const db = require('./db')
const Tasks = require('./models/tasks')
const doneTasks = require('./models/doneTasks')
const todo = express();

todo.use(express.json());

todo.get('/tasks' , async (req , res) => {
    const tasts = await Tasks.find({});
    res.json(tasts)
});

todo.get('/task/:id' , async (req , res) => {
    const taskId = req.params.id;
    const task = await Tasks.find({id : taskId});
    res.json(task);
})

todo.post('/task/create' , async (req , res) => {
    const { id , title } = req.body;
    const newTask = new Tasks({id : id , title : title});
    const saveTask = newTask.save()
    res.json(newTask);
})

todo.delete('/task/:id' , async (req , res) => {
    const taskId = req.params.id;
    const to_delete = await Tasks.deleteMany({id : taskId});
    res.json(to_delete);
})

todo.put('/task/:id/update' , async (req , res) => {
    const taskId = req.params.id;
    const { title } = req.body;
    const to_update = await Tasks.updateOne(
        {id : taskId}, 
        {$set : {title : title}},
    )
    if(res.status(200)){
        res.json('task updated')
    }
})

todo.get('/done' , async (req , res) => {
    const tasks = await doneTasks.find({});
    res.json(tasks)
})

todo.post('/done/:id' , async (req , res) => {
    const taskId = req.params.id;
    const task = await Tasks.findOne({id : taskId});
    const newTask = new doneTasks({id : task.id , title : task.title})
    const doneTask = newTask.save()
    const to_delete = await Tasks.deleteOne({id : taskId});
    if(res.status(200)) {
        res.json('done')
    }
})


todo.get('/tasks')

todo.listen(3000 , () => {
    console.log('todoList running on 3000');
})