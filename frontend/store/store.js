import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    async getLists (state) {
      const listsData =await fetch("http://localhost:8085/data.json") 
      state.lists = await listsData.json()
    },
    addTask(state, taskData){
      
      let taskList = state.lists.find(x=>x.id == taskData.listId).tasks
      let task = {
        id: Math.floor(Math.random() * 1000), 
        order: Math.max.apply(Math, taskList.map(function(task) { return task.order; })) + 1,
        name: taskData.taskName,
        description: taskData.taskDesc
      }
      taskList.push(task)
    },
    addList(state, listName){
      
      let list = {
        id: Math.floor(Math.random() * 1000), 
        order: Math.max.apply(Math, state.lists.map(function(list) { return list.order; })) + 1,
        name: listName,
        tasks : []
      }

      state.lists.push(list)

    },
    orderTasks(state, listId){
      state.lists.find(x=>x.id==listId).tasks.forEach((task, index) => {
        task.order = index
      });
    },
    orderLists(state){
      state.lists.forEach((list, index) => {
        list.order = index
      });
    }
  }
})

