import { findTechById } from '~/models/tech'

export const state = () => ({
  gameStarted: false,
  players: []
})

export const mutations = {
  start (state) {
    state.gameStarted = true
    state.players = []
    state.players.push(new Player('RED'))
    state.players.push(new Player('GREEN'))
    state.players.push(new Player('YELLOW'))
    state.players.push(new Player('BLUE'))
  },
  appendTech (state, {player, level, techId}) {
    player.tree[level].push(techId)
    player.updateArmsRank()
  },
  removeTech (state, {player, techId}) {
    Object.keys(player.tree).forEach(level => {
      player.tree[level] = player.tree[level].filter(id => id !== techId)
    })
    player.updateArmsRank()
  }
}

class Player {
  constructor (color) {
    this.color = color
    this.tree = {
      first: [],
      second: [],
      third: [],
      fourth: [],
    }
    this.arms = {
      sword: 1,
      cannon: 1,
      cavalry: 1,
      airforce: 0
    }
  }

  updateArmsRank () {
    this.arms = [
      this.tree.first,
      this.tree.second,
      this.tree.third,
      this.tree.fourth
    ].reduce((arms, techIds) => {
      techIds.map(findTechById).filter(tech => tech.arms).forEach((tech) => {
        Object.keys(tech.arms).forEach(key => {
          arms[key] = Math.max(arms[key], tech.arms[key])
        })
      })
      return arms
    }, {
      sword: 1,
      cannon: 1,
      cavalry: 1,
      airforce: 0
    })
  }
}
