'use strict';

import {directive, inject} from '../../../app.decorators';
import PlayerRepository from '../../models/playerRepository';

@directive('civbgSupportPlayersView')
class PlayersViewComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = PlayersViewController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/playersView/playersView.html';
}

@inject(PlayerRepository.name)
export class PlayersViewController {
  constructor(private playerRepository: PlayerRepository) {
    playerRepository.startNewGame([
      {color: 'RED', civilizationId: 'America'},
      {color: 'GREEN', civilizationId: 'India'},
      {color: 'BLUE', civilizationId: 'Greece'},
      {color: 'YELLOW', civilizationId: 'Mongol'}
    ]);
  }
}

export default PlayersViewComponent;
