export const state = () => ({
  players: []
})

class Player {
  constructor (color) {
    this.color = color
    this.tree = {
      one: [],
      two: [],
      three: [],
      four: [],
      keep: true
    }
    this.arms = {
      sword: 1,
      cannon: 1,
      cavalry: 1,
      airforce: 0
    }
  }
}
