<template>
  <div id="app">
    <Header/>
    <Main :lists="getLists"/>
  </div>
</template>

<script>
import Header from './components/shared/Header'
import Main from './components/shared/Main'

export default {
  name: 'app',
  components: {
    Header,
    Main
  },
  data() {
    return {
      lists: []
    }
  },
  computed: {
    getLists () {
      return this.$store.state.lists
    }
  },
  async created(){
    this.$store.commit('getLists')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: #d3e0ea;
    font-family: 'Lato', sans-serif;
  }
</style>
