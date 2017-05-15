<template>
    <div v-show="message">{{message}}</div>
</template>

<script>
export default {
  name: 'lele',
  data () {
    return {
      message: ''
    }
  },
  created() {
    this.$on('setError', message => this.message = message);
  }
}
</script>
