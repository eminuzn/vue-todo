<template>
  <main>

    <draggable 
        v-model="$store.state.lists" 
        class="flex"
        handle=".list-name"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        @sort="onShort">

      <List :list="list" :key="list.id" v-for="list in lists"/>
    </draggable>

    <AddList />

  </main>
</template>

<script>

import List from '../list/List'
import AddList from '../list/AddList'
import draggable from 'vuedraggable'

export default {
  name:"Main",
  data() {
    return {
      drag: false
    };
  },
  props: {
    lists: Array
  },
  components: {
    List,
    AddList,
    draggable
  },
  methods: {
    onShort(){
      this.$store.commit("orderLists")
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "lists",
        disabled: false,
        ghostClass: "ghost"
      };
    }
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
  .flex{
    display: flex;
  }
</style>