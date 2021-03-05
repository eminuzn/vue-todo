<template>
  <div>
    <button v-if="!isAddFormActive" @click="isAddFormActive = !isAddFormActive">Ekle</button>

    <div v-if="isAddFormActive" class="add-form">
      <input v-model="formTaskName" placeholder="Başlık" type="text">
      <input v-model="formTaskDesc" placeholder="Açıklama" type="text">
      <div class="form-button-container">
        <button class="submit" @click="AddTask()">Ekle</button>
        <button class="cancel" @click="Cancel()">İptal</button>
      </div>
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
  props:{
    listId: Number
  },
  methods:{
    AddTask(){

      if(this.formTaskName == "")
      {
        alert("Başlık Alanı Zorunludur")
      }
      else
      {
        let taskData = {
          listId : this.listId,
          taskName : this.formTaskName,
          taskDesc : this.formTaskDesc
        }

        this.$store.commit("addTask", taskData)
        this.Cancel()
      }
      
    },
    Cancel(){

        this.formTaskName = ""
        this.formTaskDesc = ""
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
  button,
  .submit,
  .cancel{
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
  .cancel{
    width: 49%;
    background: #a71616;
  }
  .submit{
    width: 49%;
  }
  button:hover{
    background: #276678;
  }
  .form-button-container{
    display: flex;
    justify-content: space-between;
  }
</style>