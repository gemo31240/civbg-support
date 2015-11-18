'use strict';

import * as _ from 'lodash';
import {directive, inject} from '../../../app.decorators';
import Colors from '../../colors';
import Civilizations from '../../civilizations';
import PlayerRepository, {PlayerSetting} from '../player/playerRepository';

class NewGameDialogSetting implements ng.ui.bootstrap.IModalSettings {
  animation = true;
  controller = NewGameController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/newGameDialog/newGameDialog.html';
}

@inject('$uibModalInstance', 'PlayerRepository')
export class NewGameController {
  private COLORS = Colors;
  private CIVILIZATIONS = Civilizations;
  private playerSettings: PlayerSetting[];

  constructor(private $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
              private playerRepository: PlayerRepository) {
    this.playerSettings = [
      new PlayerSetting(),
      new PlayerSetting(),
      new PlayerSetting(),
      new PlayerSetting()
    ];

    // it is dummy
    //this.playerSettings[0].civilizationId = 'Aztec';
    //this.playerSettings[0].color = 'RED';
    //this.playerSettings[1].civilizationId = 'Japan';
    //this.playerSettings[1].color = 'GREEN';
    //this.playerSettings[2].civilizationId = 'America';
    //this.playerSettings[2].color = 'BLUE';
    //this.playerSettings[3].civilizationId = 'America';
    //this.playerSettings[3].color = 'YELLOW';
  }

  remainingColors(me: PlayerSetting) {
    return _.reject(this.COLORS, (color) => {
      return _.any(this.playerSettings, (setting) => setting !== me && setting.color === color)
    });
  }

  ok() {
    this.playerRepository.startNewGame(this.playerSettings);
    this.$modalInstance.close();
  }
}

export default new NewGameDialogSetting();
