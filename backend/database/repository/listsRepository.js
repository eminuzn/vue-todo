const db = require('../db')
const GenericResult = require('../model/genericResult')

class listRepository{

  getLists(callback){
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
                  from lists as l
                  left join tasks as t on l.id = t.listId
                  where l.isDeleted = 0  and (t.isDeleted = 0 or t.isDeleted is null)
                  order by l.rank asc, t.rank asc`
    
    db.query(query, (error, result) => {
      if(error){
        apiResult.error(error, "db işlemi sırasında bir hata oluştu")
      }
      else{
        let finalResult = []

        if(result.length > 0){
         
          do{
            let tasks = result.filter(x=>x.listId == result[0].listId && x.taskId != null).map(function(item){
              return {
                id:item.taskId,
                listId:item.listId,
                name:item.taskName,
                desc:item.taskDesc,
                rank:item.taskRank
              }
            })

            let list = {
              id: result[0].listId,
              name: result[0].listName,
              rank: result[0].listRank,
              boardId: result[0].boardId,
              tasks:tasks
            }

            finalResult.push(list)
            result = result.filter(x=>x.listId != result[0].listId)
          }while(result.length > 0)
        }

        apiResult.resultObject = finalResult
      }
      callback(apiResult)
    })
  }

  addList(list, callback){
    let apiResult = new GenericResult()
    let query = `insert into lists(name,boardId,rank) values('${list.name}', ${list.boardId}, ${list.rank})`
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

module.exports = new listRepository();
