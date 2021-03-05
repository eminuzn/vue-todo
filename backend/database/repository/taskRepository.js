const db = require('../db')
const GenericResult = require('../model/genericResult')

class taskRepository{

  getTasks(callback){
    let apiResult = new GenericResult()
    let query = `select 
                  l.boardId,
                  l.id as listId,
                  l.name as listName,
                  l.rank as listRank,
                  t.id as taskId,
                  t.name as taskName,
                  t.description as taskDesc,
                  t.rank as taskRank 
                  from tasks as t
                  right join lists as l on l.id = t.listId
                  where l.isDeleted = 0 and t.isDeleted=0`
    db.query(query, (error, result) => {
      if(error){
        apiResult.error(error, "db işlemi sırasında bir hata oluştu")
      }
      else{
        apiResult.resultObject = result
      }
      callback(apiResult)
    })
  }

  addTasks(task, callback){
    let apiResult = new GenericResult()
    let query = `insert into tasks(name,description,listId,rank) values('${task.name}','${task.description}', ${task.listId}, ${task.rank})`
    db.query(query, (error, result) => {
      
      if(error){
        apiResult.error(error, "db işlemi sırasında bir hata oluştu")
      }
      else{
        apiResult.resultObject = result
      }

      callback(apiResult)
    })
  }

}

module.exports = new taskRepository();
