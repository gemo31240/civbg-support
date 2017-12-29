<template>
  <div class="players">
    <div v-for="player in players" class="player-view">
      <arms-info :player="player"/>
    </div>
  </div>
</template>

<script>
  import ArmsInfo from '~/components/ArmsInfo.vue'
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'players'
      ])
    },
    components: {
      ArmsInfo
    }
  }
</script>

<style scoped>
  .player-view {
    float: left;
    width: 50%;
    height: 50%;
    min-width: 400px;
    border: solid 1px #dddddd;
    position: relative;
    background: #eee;
  }

  .player-badge {
    display: inline-block;
    width: 80px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    margin: 5px;
  }
</style>
