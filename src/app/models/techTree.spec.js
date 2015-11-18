'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import TechTree from './techTree';
import Tech, {LEVELS} from './tech';

describe('Model: TechTree', ()=> {
  var techTree;

  beforeEach(() => {
    techTree = new TechTree();
    techTree.first.push(Tech.find('通貨'));
    techTree.second.push(Tech.find('官吏'));
    techTree.third.push(Tech.find('軍事学'));
    techTree.fourth.push(Tech.find('マスメディア'));
  });

  describe('#hasTech', function () {
    it('returns true if it has the tech', () => {
      assert(techTree.hasTech(Tech.find('通貨')) === true);
      assert(techTree.hasTech(Tech.find('官吏')) === true);
      assert(techTree.hasTech(Tech.find('軍事学')) === true);
      assert(techTree.hasTech(Tech.find('マスメディア')) === true);
    });

    it('returns false if it does not have the tech', () => {
      assert(techTree.hasTech(Tech.find('農業')) === false);
      assert(techTree.hasTech(Tech.find('騎士道')) === false);
      assert(techTree.hasTech(Tech.find('鉄道')) === false);
      assert(techTree.hasTech(Tech.find('飛行機')) === false);
    });
  });
});
