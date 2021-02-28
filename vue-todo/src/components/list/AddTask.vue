<template>
  <div>
    <button v-if="!isAddFormActive" @click="isAddFormActive = !isAddFormActive">Ekle</button>

    <div v-if="isAddFormActive" class="add-form">
      <input v-model="formTaskName" placeholder="Başlık" type="text">
      <input v-model="formTaskDesc" placeholder="Açıklama" type="text">
      <button @click="AddTask()">Ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"AddTask",
  data() {
    return {
      isAddFormActive: false,
      formTaskName:"",
      formTaskDesc:""
    }
  },
  methods:{
    AddTask(){
      this.isAddFormActive = !this.isAddFormActive
    }
  }
}
</script>

<style scoped>
  input{
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid grey;
  }
  input:focus{
    border: 2px solid #1687a7;
  }
  button{
    width: 100%;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #276678;
    outline: none;
    cursor: pointer;
    background: #1687a7;
    color: white;
    transition: all 0.3s ease-in-out;
  }
  button:hover{
    background: #276678;
  }
</style>