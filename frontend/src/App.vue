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
  
</style>
