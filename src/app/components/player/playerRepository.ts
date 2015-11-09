'use strict';

import * as angular from 'angular';
import * as _ from 'lodash';
import Player from './player';
import {service, inject} from '../../../app.decorators';
import ListIterator = _.ListIterator;

@service
class PlayerRepository {
  private _players: Player[] = [];

  get players(): Player[] {
    return this._players;
  }

  startNewGame(players: Player[]) {
    // don't do `this._players = players`
    _.times(this._players.length, () => this._players.splice(0));
    _.each(players, <ListIterator<Player, void>>((player) => this._players.push(player)));
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
