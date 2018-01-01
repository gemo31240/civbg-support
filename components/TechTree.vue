<template>
  <div class="tech-tree" :class="`tech-level1-${count('first')}`">
    <ul v-for="level in TECH_LEVELS" class="tech-row" :class="`tech-${level}`">
      <li v-for="techId in techs(level)" class="tech-list-item">
        <a class="remove" @click="removeTech({player, techId})">&times;</a>
        <span class="tech-list-item-label">{{techName(techId)}}</span>
      </li>

      <li class="tech-list-item append-tech" v-if="isAddable(level)">
        <b-select v-model="selectedTech" :options="remaining(level)" @change="handleChange(level, $event)">
          <template slot="first">
            <option value="" selected>&#45;&#45;&#45;&#45;</option>
          </template>
        </b-select>
      </li>
    </ul>
  </div>
</template>

<script>
  import Techs from '~/service/tech'
  import { mapActions } from 'vuex'
  import { ADD_TECH, REMOVE_TECH } from '~/store/action-types'

  const TECH_LEVELS = ['first', 'second', 'third', 'fourth']

  export default {
    data () {
      return {
        TECH_LEVELS,
        selectedTech: ''
      }
    },
    methods: {
      count (level) {
        return this.techs(level).length
      },
      techs (level) {
        return `tree.${level}`.split('.').reduce((obj, attr) => obj[attr] || [], this.player)
      },
      isAddable (level) {
        switch (level) {
          case 'fourth':
            return this.count('fourth') < this.count('third') - 1
          case 'third':
            return this.count('third') < this.count('second') - 1
          case 'second':
            return this.count('second') < this.count('first') - 1
          default:
            return true
        }
      },
      remaining (level) {
        return Techs
          .filter(tech => tech.level === level && !this.techs(level).includes(tech.id))
          .map(tech => ({text: tech.name, value: tech.id}))
      },
      techName (techId) {
        return (Techs.find(tech => tech.id === techId) || {}).name
      },
      handleChange (level, techId) {
        if (techId && techId.length > 0) {
          this.addTech({player: this.player, level, techId})
          this.resetSelection()
        }
      },
      resetSelection () {
        this.$nextTick(() => { this.selectedTech = '' })
      },
      ...mapActions({
        addTech: ADD_TECH,
        removeTech: REMOVE_TECH,
      })
    },
    props: {
      player: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tech-tree
    width: 100%
    height: 100%
    display: flex
    flex-direction: column-reverse

    @media screen and (max-width: 1024px)
      font-size: 1em

    @media screen and (min-width: 1025px)
      font-size: 1.5em

    .tech-row
      height: 25%
      display: flex
      position: relative
      margin: 0
      margin-bottom: 1px
      padding: 0
      overflow: hidden
      list-style: none

      .tech-list-item
        height: 100%
        border: solid 2px #66512c
        border-radius: 5px
        background-color: white
        width: 15%
        overflow: hidden
        position: relative
        display: flex
        justify-content: center
        align-items: center

        .remove
          position: absolute
          top: 2px
          right: 2px
          color: #c23c3f
          display: none
          cursor: pointer
          font-weight: bold
          padding: .5rem
          line-height: 1rem

        &:hover .remove
          display: block

        .tech-list-item-label
          color: #333
          text-align: center

        .tech-list-item-wrapper
          width: 100%
          height: 100%
          text-align: center

      .append-tech
        overflow: visible
        border: dotted 2px rgba(217, 174, 32, 0.65)

        select
          appearance: none
          width: 100%
          height: 100%
          border-radius: 5px
          text-align: center
          font-size: 1.5rem
</style>
