<template>
  <my-cpn
    :visible.sync="hello"
    @my-event="onMyEvent"
  />
</template>

<script>
import myCpn from './cpn.vue'

export default {
  name: 'Hello',
  components: {
    myCpn,
  },
  methods: {
    onMyEvent() {},
  },
}
</script>

<style lang="scss" scoped>

</style>
