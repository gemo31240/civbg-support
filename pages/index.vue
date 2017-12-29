<template>
  <players/>
</template>

<script>
  import Players from '~/components/Players.vue'
  import { mapMutations } from 'vuex'

  export default {
    mounted () {
      this.start()
    },
    methods: {
      ...mapMutations({
        start: 'start'
      })
    },
    components: {
      Players
    }
  }
</script>
