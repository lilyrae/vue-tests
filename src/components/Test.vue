<template>
  <div>
    <h1>My Test Page</h1>
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
      list: ['hello', 'and', 'welcome']
    }
  }
}
</script>
