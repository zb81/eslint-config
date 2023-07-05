<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
    <button @click="onClick">
      Click Me
    </button>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    onClick() {
      this.$emit('my-event', 123)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
