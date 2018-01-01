<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info" :sticky="true">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">CivBG Support</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-b-modal.newGameModal>New Game</b-nav-item>
          <b-nav-item @click="toggleTeslaMode">テスラの効果を切り替える [{{teslaMode ? 'ON' : 'OFF'}}]</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal id="newGameModal" title="ゲームの開始" ok-title="開始" cancel-title="キャンセル"
             :ok-disabled="startable" @ok="startGame">
      <p>プレイヤーの色を選んでください。</p>

      <b-form-group label="1st" label-for="first-color" :label-cols="1" horizontal>
        <b-form-select id="first-color" v-model="selectedColors.first" :options="restColorsFor('first')"/>
      </b-form-group>

      <b-form-group label="2nd" label-for="second-color" :label-cols="1" horizontal>
        <b-form-select id="second-color" v-model="selectedColors.second" :options="restColorsFor('second')"/>
      </b-form-group>

      <b-form-group label="3rd" label-for="third-color" :label-cols="1" horizontal>
        <b-form-select id="third-color" v-model="selectedColors.third" :options="restColorsFor('third')"/>
      </b-form-group>

      <b-form-group label="4th" label-for="fourth-color" :label-cols="1" horizontal>
        <b-form-select id="fourth-color" v-model="selectedColors.fourth" :options="restColorsFor('fourth')"/>
      </b-form-group>
    </b-modal>
  </header>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from '~/store/mutation-types'

  const COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE']

  export default {
    data () {
      return {
        selectedColors: {
          first: '',
          second: '',
          third: '',
          fourth: ''
        }
      }
    },
    computed: {
      startable () {
        return Object.values(this.selectedColors).filter(c => c !== '').length < 2
      },

      ...mapState([
        'teslaMode',
      ])
    },
    methods: {
      restColorsFor (user) {
        const selected = Object.values(this.selectedColors).filter(c => c !== '')
        return ['', ...COLORS.filter((c) => selected.indexOf(c) === -1 || c === this.selectedColors[user])]
      },
      startGame () {
        console.log('Start game')
      },
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
    }
  }
</script>
