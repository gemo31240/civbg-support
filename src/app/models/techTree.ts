'use strict';

import * as _ from 'lodash';
import Tech, {LEVELS} from './tech';

export default class TechTree {
  public first: Tech[] = [];
  public second: Tech[] = [];
  public third: Tech[] = [];
  public fourth: Tech[] = [];

  public get(level: string) {
    switch (level) {
      case 'first':
        return this.first;
      case 'second':
        return this.second;
      case 'third':
        return this.third;
      case 'fourth':
        return this.fourth;
    }
  }

  public hasTech(techId: string) {
    var tech = Tech.find(techId);
    if (!tech) {
      return false;
    }
    return _.any(LEVELS, (level) => {
      return _.contains(this.get(level), tech);
    });
  }

  public isAddable(level: string) {
    switch (level) {
      case 'fourth':
        return _.keys(this.fourth).length + 1 < _.keys(this.third).length;
      case 'third':
        return _.keys(this.third).length + 1 < _.keys(this.second).length;
      case 'second':
        return _.keys(this.second).length + 1 < _.keys(this.first).length;
      case 'first':
        return true;
    }
  }

  public addTech(techId: string, level: string) {
    var tech = Tech.find(techId);
    if (tech) {
      this.get(level).push(tech);
    }
    //var length = _.max(_.chain(this.player.tech[level]).keys().map((k) => +k).value().concat([-1]));
    //if (!this.player.tech[level]) {
    //  this.player.tech[level] = {};
    //}
    //this.player.tech[level][length + 1] = techId;
  }

  public removeTech(techId: string) {
    _.each(LEVELS, (level) => {
      var index = _.findIndex(this.get(level), (tech) => tech.id === techId);
      if (index >= 0) {
        this.get(level).splice(index, 1);
      }
    });
  }
}
