<template>
  <div>
    <h1>My Test Page</h1>
    </br>
    <input v-model="entry" >
    <button @click="addEntryToList">Click Me!</button>
    <error ref="error"></error>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import error from './Error.vue';

export default {
  name: 'test',
  components: {
    error
  },
  data () {
    return {
      list: ['hello', 'and', 'welcome'],
      entry: ''
    }
  },
  methods: {
      addEntryToList() {
        if(this.entry != '') {
          this.list.push(this.entry);
          this.entry = '';
        } else {
          Event.$emit('setError', 'Please input your list item.');
        }
      }
  }
}
</script>
