'use strict';

import {appName} from '../../../constants';
import PlayerRepository from '../player/playerRepository';

export default class PlayersViewComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = PlayersViewController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/playersView/playersView.html';
}

export class PlayersViewController {
  public static $inject = [PlayerRepository.name];

  constructor(private playerRepository: PlayerRepository) {
    //this.playerRepository.newGame(4);
  }
}

angular.module(appName).directive('playersView', () => new PlayersViewComponent);
