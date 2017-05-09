<template>
  <div>
    <h1>My Test Page</h1>
    </br>
    <input v-model="entry" >
    <button @click="addEntryToList">Click Me!</button>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      list: ['hello', 'and', 'welcome'],
      entry: ''
    }
  },
  methods: {
      addEntryToList() {
        this.list.push(this.entry);
        this.entry = '';
      }
  }
}
</script>
