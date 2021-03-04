<template>
  <div class="list-container">
  
    <h3 class="list-name">{{list.name}}</h3>
    <div class="tasks">
      <draggable 
        v-model="list.tasks" 
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        @sort="onShort">

        <Task v-for="task in list.tasks" :key="task.id" :task="task" />
      </draggable>
    </div>

    <AddTask :listId="list.id"/>

  </div>
</template>

<script>
import Task from '../task/Task'
import AddTask from '../task/AddTask'
import draggable from 'vuedraggable'

export default {
  name:"List", 
  data() {
    return {
      drag: false
    };
  },
  props: {
    list: Object
  },
  components:{
    Task,
    AddTask,
    draggable
  },
  methods: {
    onShort(){
      this.$store.commit("orderTasks", this.list.id)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "task",
        disabled: false,
        ghostClass: "ghost"
      };
    }
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
    padding: 10px;
    cursor: move;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }
  
  h3:hover{
    background: #d2d2d2;
  }
</style>