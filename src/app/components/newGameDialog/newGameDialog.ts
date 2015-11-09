'use strict';

import * as _ from 'lodash';
import {directive, inject} from '../../../app.decorators';
import Colors from '../../colors';
import Civilizations from '../../civilizations';
import Player from '../player/player';
import PlayerRepository from '../player/playerRepository';

class NewGameDialogSetting implements ng.ui.bootstrap.IModalSettings {
  animation = true;
  controller = NewGameController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/newGameDialog/newGameDialog.html';
}

class PlayerSetting {
  public color: string;
  public civilizationId: string;
}

@inject('$uibModalInstance', 'PlayerRepository')
export class NewGameController {
  private COLORS = Colors;
  private CIVILIZATIONS = Civilizations;
  private players: PlayerSetting[];

  constructor(private $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
              private playerRepository: PlayerRepository) {
    this.players = [
      new PlayerSetting(),
      new PlayerSetting(),
      new PlayerSetting(),
      new PlayerSetting()
    ];

    // it is dummy
    this.players[0].civilizationId = 'Aztec';
    this.players[0].color = 'RED';
    this.players[1].civilizationId = 'Japan';
    this.players[1].color = 'GREEN';
    this.players[2].civilizationId = 'America';
    this.players[2].color = 'BLUE';
    this.players[3].civilizationId = 'America';
    //this.players[3].color = 'YELLOW';
  }

  remainingColors(me: Player) {
    return _.reject(this.COLORS, (color) => {
      return _.any(this.players, (player) => player !== me && player.color === color)
    });
  }

  ok() {
    //this.playerRepository.startNewGame(this.players);
    this.$modalInstance.close(this.players);
  }
}

export default new NewGameDialogSetting();
