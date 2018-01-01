<template>
  <players/>
</template>

<script>
  import Players from '~/components/Players.vue'
  import { mapActions } from 'vuex'
  import { LOAD_GAME } from '~/store/action-types'

  export default {
    async asyncData ({params}) {
      return {id: params.id}
    },
    async created () {
      const loaded = await this.loadGame(this.id)
      if (!loaded) {
        this.$router.replace('/')
      }
    },
    methods: {
      ...mapActions({
        loadGame: LOAD_GAME
      })
    },
    components: {
      Players
    }
  }
</script>
