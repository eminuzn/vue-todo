import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    async getLists (state) {
      const listsData =await fetch("http://localhost:8080/data.json") 
      state.lists = await listsData.json()
    },
    addTask(state, taskData){

      let task = {
        id: Math.floor(Math.random() * 1000), 
        name: taskData.taskName,
        description: taskData.taskDesc
      }
      state.lists.find(x=>x.id == taskData.listId).tasks.push(task)
    },
    addList(state, listName){
      
      let list = {
        id: Math.floor(Math.random() * 1000), 
        name: listName,
        tasks : []
      }

      state.lists.push(list)

    }
  }
})

