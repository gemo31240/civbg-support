import { firebaseMutations, firebaseAction } from 'vuexfire'
import { calcArmsRank, isNewtonUsed } from './functions'
import db from '~/plugins/firebase'
import { SET_NEWTON_USED, ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from './mutation-types'
import { START_GAME, ADD_TECH, REMOVE_TECH, SET_PLAYERS_REF } from './action-types'

const playersRef = db.ref('players')

export const state = () => ({
  gameStarted: false,
  players: [],
  newtonUsed: false,
  teslaMode: false,
})

export const mutations = {
  [SET_NEWTON_USED] (state) {
    state.newtonUsed = isNewtonUsed(state.players)
  },

  [ENABLE_TESLA_MODE] (state) {
    state.teslaMode = true
  },

  [DISABLE_TESLA_MODE] (state) {
    state.teslaMode = false
  },

  ...firebaseMutations
}

export const actions = {
  [START_GAME] ({dispatch}) {
    dispatch(SET_PLAYERS_REF)
    // playersRef.set([])
    // playersRef.push(new Player('RED'))
    // playersRef.push(new Player('GREEN'))
    // playersRef.push(new Player('YELLOW'))
    // playersRef.push(new Player('BLUE'))
  },

  async [ADD_TECH] ({commit}, {player, level, techId}) {
    await playersRef.child(player['.key']).transaction((p) => {
      if (p) {
        p.tree = {first: [], second: [], third: [], fourth: [], ...p.tree}
        p.tree[level].push(techId)
        p.arms = calcArmsRank(p)
      }
      return p
    })
    commit(SET_NEWTON_USED)
    commit(DISABLE_TESLA_MODE)
  },

  [REMOVE_TECH] ({commit}, {player, techId}) {
    playersRef.child(player['.key']).transaction((p) => {
      if (p && p.tree) {
        Object.keys(p.tree).forEach(level => {
          p.tree[level] = p.tree[level].filter(id => id !== techId)
        })
        p.arms = calcArmsRank(p)
      }
      return p
    })
    commit(SET_NEWTON_USED)
    commit(DISABLE_TESLA_MODE)
  },

  [SET_PLAYERS_REF]: firebaseAction(({bindFirebaseRef, commit}) => {
    bindFirebaseRef('players', playersRef, {
      readyCallback: () => commit(SET_NEWTON_USED),
      wait: true
    })
  }),
}

// class Player {
//   constructor (color) {
//     this.color = color
//     this.tree = {
//       first: [],
//       second: [],
//       third: [],
//       fourth: [],
//     }
//     this.arms = {
//       sword: 1,
//       cannon: 1,
//       cavalry: 1,
//       airforce: 0
//     }
//   }
// }
