'use strict';

import Civilization from './civilization';
import TechTree from './techTree';
import Tech from './tech';

export class PlayerConfig {
  constructor(public color: string = null,
              public civilizationId: string = null) {
  }
}

export default class Player {
  public civilizationId: string;
  public color: string;
  public techTree: TechTree;

  public get civilization() {
    return Civilization.find(this.civilizationId);
  }

  constructor(config: PlayerConfig) {
    this.civilizationId = config.civilizationId;
    this.color = config.color;
    this.techTree = new TechTree();

    this.studyBeginningTech();
  }

  private studyBeginningTech() {
    this.techTree.first.push(Tech.find(this.civilization.beginningTechId));
  }

//Players.$inject = ['$rootScope', '$firebaseArray', 'Firebase'];

  //constructor($rootScope, $firebaseArray, Firebase) {
  //  var playersRef = new Firebase('https://civbg-support.Firebaseio.com/players');
  //
  //  this.$rootScope = $rootScope;
  //  this.players = $firebaseArray(playersRef);
  //
  //  this.players.$loaded(() => this.installAutoSaver());
  //}
  //
  //installAutoSaver() {
  //  _.each(this.players, (player, i) => {
  //    this.$rootScope.$watch(() => this.players[i], (player) => {
  //      if (!_.isEmpty(player)) {
  //        this.players.$save(i);
  //      }
  //    }, true);
  //  });
  //}
  //
  //start(colors) {
  //  _.each(this.players, (player) => this.players.$remove(player));
  //  _.each(colors, (color) => {
  //    this.players.$add({
  //      color: color,
  //      tech: {
  //        one: [], two: [], three: [], four: [], keep: true
  //      }
  //    });
  //  });
  //}
}
