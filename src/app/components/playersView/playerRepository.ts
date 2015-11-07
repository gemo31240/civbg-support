'use strict';

import * as angular from 'angular';
import * as _ from 'lodash';
import Player from './player';
import {service, inject} from '../../../app.decorators';

@service
class PlayerRepository {
  private _players: Player[];

  get players(): Player[] {
    return this._players;
  }

  newGame(numOfPlayers: number): void {
    this._players = [];
    _.times(numOfPlayers, () => this._players.push(new Player()));
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

export default PlayerRepository;
