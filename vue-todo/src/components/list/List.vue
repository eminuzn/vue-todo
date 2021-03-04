<template>
  <div class="list-container">
  
    <h3>{{list.name}}</h3>
    <div class="list">
      <Task v-for="task in list.tasks" :key="task.id" :task="task" />
    </div>

    <AddTask :listId="list.id"/>

  </div>
</template>

<script>
import Task from '../task/Task'
import AddTask from '../task/AddTask'
export default {
  name:"List",
  props: {
    list: Object
  },
  components:{
    Task,
    AddTask
  }
}
</script>

<style scoped>
  .list-container{
    background: #f6f5f5;
    max-width: 300px;
    width: 100%;
    margin: 10px 10px;
    border-radius: 8px;
    height: fit-content;
    padding: 15px;
    box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.15);
  }
  .list{
    width: 100%;
    margin-bottom: 20px;
  }
  h3{
    border-bottom: 1px solid #d2d2d2;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
 
</style>