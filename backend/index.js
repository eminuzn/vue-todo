const path = require('path')
const express = require('express')
const listRepo = require('./database/repository/listsRepository')
const taskRepo = require('./database/repository/taskRepository')
const { response } = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/getLists', (req, res) => {
  
  listRepo.getLists((apiResult)=>{
    res.send(apiResult)
  })

})

app.post('/addList', (req, res) => {

  listRepo.addList(req.body, (apiResult)=>{
    console.log(apiResult)
    res.send(apiResult)
  })

})


app.get('/getTasks', (req, res) => {
  
  taskRepo.getTasks((apiResult)=>{
    res.send(apiResult)
  })

})

app.post('/addTask', (req, res) => {

  taskRepo.addTasks(req.body, (apiResult)=>{
    console.log(apiResult)
    res.send(apiResult)
  })

})

app.listen(3333, () => {
    console.log('Application listening on port 3333 : http://localhost:3333/')
})