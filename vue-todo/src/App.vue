<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/header/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');  
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    background: #d3e0ea;
    font-family: 'Lato', sans-serif;
  }
</style>
