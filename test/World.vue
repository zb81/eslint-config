<template>
  <div>
    <img :key.sync="msg" src="" alt="" />
  </div>
</template>

<script>
export default {
  name: 'World',
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
