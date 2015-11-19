'use strict';

import * as _ from 'lodash';
import {directive, inject} from '../../../app.decorators';
import Player from '../../models/player';
import Tech, {LEVELS} from '../../models/tech';
import TechTree from '../../models/techTree';

@directive('civbgSupportArmsInfo')
class ArmsInfoComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = ArmsInfoController;
  controllerAs = 'ctrl';
  bindToController = {
    player: '='
  };
  templateUrl = 'app/components/armsInfo/armsInfo.html';
}

export class ArmsInfoController {
}

//export class ArmsDropdownDirective {
//  constructor() {
//    this.templateUrl = 'arms-dropdown-template.html';
//    this.restrict = 'EA';
//    this.scope = {
//      model: '=ngModel',
//      airforce: '@'
//    };
//  }
//
//  link(scope) {
//    scope.ranks = [1, 2, 3, 4];
//    scope.updateRank = (rank) => scope.model = rank;
//  }
//
//  static activate() {
//    ArmsDropdownDirective.instance = new ArmsDropdownDirective();
//    return ArmsDropdownDirective.instance;
//  }
//}
//ArmsInfoController.$inject = ['$scope', 'Players'];
