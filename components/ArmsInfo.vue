<template>
  <div class="arms-info">
    <div v-for="(rank, type) in player.arms" class="arms-wrapper">
      <arm-info :type="type" :rank="rank"/>
    </div>
  </div>
</template>

<script>
  import ArmInfo from '~/components/ArmInfo.vue'

  export default {
    computed: {},
    methods: {},
    props: {
      player: {
        type: Object,
        required: true
      }
    },
    components: {
      ArmInfo
    }
  }
</script>

<style lang="stylus" scoped>
  .arms-info .arms-wrapper
    text-align: center
    float: left
    margin: 0 .5rem
</style>
