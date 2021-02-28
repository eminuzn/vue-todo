<template>
  <div class="task">
    <p class="header">{{task.name}}</p>
    <p class="content">{{task.description}}</p>
  </div>
</template>

<script>
export default {
  name:"Task",
  props: {
    task: Object
  }
}
</script>

<style scoped>
  
  .task{
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
    border-radius: 5px;
  }
  .header{
    font-weight: bold;
    margin-bottom: 5px;
  }
  .content{
    font-size: 13px;
  }
</style>