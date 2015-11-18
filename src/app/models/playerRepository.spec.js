'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import 'angular-mocks';
import Player, {PlayerConfig} from './player';
import PlayerRepository from './playerRepository';

describe('Service: PlayerRepository', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));

  var PlayerRepository;

  beforeEach(inject((_PlayerRepository_) => {
    PlayerRepository = _PlayerRepository_;
  }));

  describe('#startNewGame', function () {
    it('initializes players', function () {
      PlayerRepository.startNewGame([
        new PlayerConfig('RED', 'America'),
        new PlayerConfig('GREEN', 'India'),
        new PlayerConfig('BLUE', 'Greece'),
        new PlayerConfig('YELLOW', 'Mongol')
      ]);
      assert(PlayerRepository.players.length === 4);
      assert.deepEqual(PlayerRepository.players[0], new Player({color: 'RED', civilizationId: 'America'}));
      assert.deepEqual(PlayerRepository.players[1], new Player({color: 'GREEN', civilizationId: 'India'}));
      assert.deepEqual(PlayerRepository.players[2], new Player({color: 'BLUE', civilizationId: 'Greece'}));
      assert.deepEqual(PlayerRepository.players[3], new Player({color: 'YELLOW', civilizationId: 'Mongol'}));
    });
  });
});
