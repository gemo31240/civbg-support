<template>
  <players/>
</template>

<script>
  import Players from '~/components/Players.vue'
  import { mapActions } from 'vuex'
  import { START_GAME } from '~/store/action-types'

  export default {
    mounted () {
      this.startGame()
    },
    methods: {
      ...mapActions({
        startGame: START_GAME
      })
    },
    components: {
      Players
    }
  }
</script>
