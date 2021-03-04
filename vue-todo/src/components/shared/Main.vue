<template>
  <main>
    <List :list="list" :key="list.id" v-for="list in lists"/>
    <AddList />

  </main>
</template>

<script>

import List from '../list/List'
import AddList from '../list/AddList'

export default {
  name:"Main",
  props: {
    lists: Array
  },
  components: {
    List,
    AddList
  }
}
</script>

<style scoped>
  main{
    padding: 20px 20px 20px 10px;
    display: flex;
    width: fit-content;
    min-width: 100%;
  }
  
</style>