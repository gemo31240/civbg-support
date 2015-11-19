'use strict';

import * as _ from 'lodash';
import {directive, inject} from '../../../app.decorators';
import PlayerRepository from '../../models/playerRepository';
import Tech, {LEVELS} from '../../models/tech';
import TechTree from '../../models/techTree';

const REVERSED_LEVELS = _(LEVELS).reverse().value();

@directive('civbgSupportTechTreeView')
class TechTreeComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = TechTreeController;
  controllerAs = 'ctrl';
  bindToController = {
    tree: '='
  };
  templateUrl = 'app/components/techTreeView/techTreeView.html';
}

@inject('$window', PlayerRepository.name)
export class TechTreeController {
  public LEVELS = REVERSED_LEVELS;

  public tree: TechTree;

  constructor(private $window: ng.IWindowService,
              private playerRepository: PlayerRepository) {
    //this.levels = ;
    //
    this.initPlayerTechTree();
  }

  private initPlayerTechTree() {
    //if (!_.isObject(this.player.tech)) {
    //  this.player.tech = {};
    //}
    //this.player.tech.keep = true;
  }

  //
  //toName(techId) {
  //  return _.find(this.Tech, (tech) => tech.id === techId).name;
  //}

  public isTechAddable(level: string) {
    return this.tree.isAddable(level);
  }

  //isNewtonUsed() {
  //  var containsNewton = (techIds) => _.contains(techIds, 'newton');
  //  var newtonScanner = (player) => containsNewton(player.tech.one) || containsNewton(player.tech.two) || containsNewton(player.tech.three) || containsNewton(player.tech.four);
  //  return _.find(this.players, newtonScanner);
  //}

  public remainingTechs(level: string) {
    var techs: Tech[] = _(Tech.all)
      .filter((tech) => tech.level === level)
      .reject((tech) => this.tree.hasTech(tech.id))
      .value();

    //// ニュートン
    //if (level !== 'five' && !this.isNewtonUsed()) {
    //  techs.push(this.Tech[this.Tech.length - 1]);
    //}
    //
    //// 初期技術
    //if (level === 'one' && _.isEmpty(this.player.tech.one)) {
    //  return _.filter(this.Tech, (tech) => tech.level === 'one' || tech.level === 'two');
    //}

    return techs;
  }

  public techSelectionChanged(techId: string, level: string) {
    this.tree.addTech(techId, level);
    //this.updateArmsRank();
  }

  public removeTech(techId: string) {
    if (this.$window.confirm('ほんまに消すんか？')) {
      this.tree.removeTech(techId);
      //this.updateArmsRank();
    }
  }

  //updateArmsRank() {
  //  var techArray = _.compact(_.flatten([
  //    _.values(this.player.tech.one),
  //    _.values(this.player.tech.two),
  //    _.values(this.player.tech.three),
  //    _.values(this.player.tech.four)
  //  ]));
  //
  //  this.player.arms = {
  //    sword: 1,
  //    cannon: 1,
  //    cavalry: 1,
  //    airforce: 0
  //  };
  //
  //  _.chain(techArray).map(this.Tech.findById).filter((tech) => angular.isString(tech.arms)).each((tech) => {
  //    if (tech.arms.indexOf('歩兵') === 0) {
  //      this.player.arms.sword = _.max([this.player.arms.sword, +tech.arms.slice(-1)]);
  //    }
  //    if (tech.arms.indexOf('砲兵') === 0) {
  //      this.player.arms.cannon = _.max([this.player.arms.cannon, +tech.arms.slice(-1)]);
  //    }
  //    if (tech.arms.indexOf('騎兵') === 0) {
  //      this.player.arms.cavalry = _.max([this.player.arms.cavalry, +tech.arms.slice(-1)]);
  //    }
  //    if (tech.arms.indexOf('全兵') === 0) {
  //      this.player.arms.sword = _.max([this.player.arms.sword, +tech.arms.slice(-1)]);
  //      this.player.arms.cannon = _.max([this.player.arms.cannon, +tech.arms.slice(-1)]);
  //      this.player.arms.cavalry = _.max([this.player.arms.cavalry, +tech.arms.slice(-1)]);
  //    }
  //    if (tech.arms.indexOf('飛行機') === 0) {
  //      this.player.arms.airforce = 1;
  //    }
  //  });
  //}
  //
  //openDetail(techId) {
  //  this.$modal.open({
  //    animation: true,
  //    templateUrl: 'app/components/dialogs/techDetail.html',
  //    controller: 'TechDetailController',
  //    controllerAs: 'ctrl',
  //    size: 'lg',
  //    resolve: {
  //      techId: () => techId
  //    }
  //  });
  //}
}

export default TechTreeComponent;