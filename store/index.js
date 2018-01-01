import { firebaseMutations, firebaseAction } from 'vuexfire'
import calcArmsRank from './calcArmsRank'
import db from '~/plugins/firebase'
import { START_GAME, ADD_TECH, REMOVE_TECH } from './action-types'

const playersRef = db.ref('players')

export const state = () => ({
  gameStarted: false,
  players: []
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  [START_GAME]: firebaseAction(({bindFirebaseRef}) => {
    bindFirebaseRef('players', playersRef, {wait: true})
    // playersRef.set([])
    // playersRef.push(new Player('RED'))
    // playersRef.push(new Player('GREEN'))
    // playersRef.push(new Player('YELLOW'))
    // playersRef.push(new Player('BLUE'))
  }),

  [ADD_TECH] (context, {player, level, techId}) {
    playersRef.child(player['.key']).transaction((p) => {
      if (p) {
        p.tree = {first: [], second: [], third: [], fourth: [], ...p.tree}
        p.tree[level].push(techId)
        p.arms = calcArmsRank(p)
      }
      return p
    })
  },

  [REMOVE_TECH] (context, {player, techId}) {
    playersRef.child(player['.key']).transaction((p) => {
      if (p && p.tree) {
        Object.keys(p.tree).forEach(level => {
          p.tree[level] = p.tree[level].filter(id => id !== techId)
        })
        p.arms = calcArmsRank(p)
      }
      return p
    })
  },
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
