'use strict';

import * as _ from 'lodash';
import {directive, inject} from '../../../app.decorators';
import Colors from '../../models/color';
import Civilization from '../../models/civilization';
import PlayerRepository from '../../models/playerRepository';
import {PlayerConfig} from '../../models/player';

class NewGameDialogSetting implements ng.ui.bootstrap.IModalSettings {
  animation = true;
  controller = NewGameController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/newGameDialog/newGameDialog.html';
}

@inject('$uibModalInstance', PlayerRepository.name)
export class NewGameController {
  private COLORS = Colors;
  private CIVILIZATIONS = Civilization.all;
  private playerConfigs: PlayerConfig[];

  constructor(private $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
              private playerRepository: PlayerRepository) {
    this.playerConfigs = [
      new PlayerConfig(),
      new PlayerConfig(),
      new PlayerConfig(),
      new PlayerConfig()
    ];
  }

  public remainingColors(me: PlayerConfig) {
    return _.reject(this.COLORS, (color) => {
      return _.any(this.playerConfigs, (config) => config !== me && config.color === color)
    });
  }

  public ok() {
    this.playerRepository.startNewGame(this.playerConfigs);
    this.$modalInstance.close();
  }
}

export default new NewGameDialogSetting();
