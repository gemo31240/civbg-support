'use strict';

import {appName} from '../../../constants';
import PlayerRepository from './playerRepository';

export default class PlayersViewComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = PlayersViewController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/playersView/playersView.html';
}

export class PlayersViewController {
  private playerRepository: PlayerRepository;

  public static $inject = [PlayerRepository.name];

  constructor(playerRepository: PlayerRepository) {
    this.playerRepository = playerRepository;
    this.playerRepository.newGame(4);
  }
}

angular.module(appName).directive('playersView', () => new PlayersViewComponent);
