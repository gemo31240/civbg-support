<template>
  <b-navbar toggleable="md" type="dark" variant="success" :sticky="true">
    <b-navbar-brand href="/">CivBG Support</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse" v-if="ingame">
      <b-navbar-nav>
        <b-nav-item @click="toggleTeslaMode">テスラの効果を切り替える [{{teslaMode ? 'ON' : 'OFF'}}]</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from '~/store/mutation-types'

  export default {
    computed: {
      ...mapState([
        'teslaMode',
      ])
    },
    methods: {
      toggleTeslaMode () {
        if (this.teslaMode) {
          this.disableTeslaMode()
        } else {
          this.enableTeslaMode()
        }
      },

      ...mapMutations({
        enableTeslaMode: ENABLE_TESLA_MODE,
        disableTeslaMode: DISABLE_TESLA_MODE
      })
    },
    props: {
      ingame: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
