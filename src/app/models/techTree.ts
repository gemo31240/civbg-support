'use strict';

import * as _ from 'lodash';
import Tech, {LEVELS} from './tech';

export default class TechTree {
  public first: Tech[] = [];
  public second: Tech[] = [];
  public third: Tech[] = [];
  public fourth: Tech[] = [];

  //[level: string]: Tech[];
  //[level: string]: Tech[];

  public get(level: string) {
    switch (level){
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

  public hasTech(tech: Tech) {
    return _.any(LEVELS, (level) => {
      return _.contains(this.get(level), tech);
    });
  }
}
