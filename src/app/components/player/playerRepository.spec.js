'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import Player from './player';
import PlayerRepository from './playerRepository';

describe('Service: PlayerRepository', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));

  var PlayerRepository;

  beforeEach(inject((_PlayerRepository_) => {
    PlayerRepository = _PlayerRepository_;
  }));

  describe('#startNewGame', function () {
    var dummyPlayers;

    beforeEach(() =>{
      dummyPlayers = [
        new Player(),
        new Player(),
        new Player(),
        new Player()
      ];
    });

    it('initializes players', function () {
      PlayerRepository.startNewGame(dummyPlayers);
      assert.deepEqual(PlayerRepository.players, dummyPlayers);
    });
  });
});
