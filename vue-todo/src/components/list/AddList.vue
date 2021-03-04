<template>
  <div class="list-container">
    <button v-if="!isAddFormActive" @click="isAddFormActive = !isAddFormActive">Liste Oluştur</button>

    <div v-if="isAddFormActive" class="add-form">
      <input v-model="formListName" placeholder="Başlık" type="text">
      <div class="form-button-container">
        <button class="submit" @click="AddList()">Oluştur</button>
        <button class="cancel" @click="Cancel()">İptal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"AddList",
  data() {
    return {
      isAddFormActive: false,
      formListName:""
    }
  },
  methods:{
    AddList(){

      if(this.formListName == "")
      {
        alert("Başlık Alanı Zorunludur")
      }
      else
      {
        this.$store.commit("addList", this.formListName)
        this.Cancel()
      }
      
    },
    Cancel(){
        this.formListName = ""
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