<template>
  <div class="list-container">
  
    <h3>{{list.name}}</h3>
    <div class="tasks">
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
  
  .tasks{
    width: 100%;
    margin-bottom: 20px;
  }
  h3{
    border-bottom: 1px solid #d2d2d2;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
 
</style>