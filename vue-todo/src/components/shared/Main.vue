<template>
  <main>
    <List :list="list" :key="list.id" v-for="list in lists"/>
  </main>
</template>

<script>

import List from '../list/List'

export default {
  name:"Main",
  props: {
    lists: Array
  },
  components: {
    List
  }
}
</script>

<style scoped>
  main{
    padding: 20px 20px 20px 10px;
    display: flex;
  }
  
</style>