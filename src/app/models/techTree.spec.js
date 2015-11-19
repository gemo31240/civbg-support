'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import TechTree from './techTree';
import Tech, {LEVELS} from './tech';

describe('Model: TechTree', ()=> {
  var techTree;

  beforeEach(() => {
    techTree = new TechTree();
    techTree.addTech('通貨', 'first');
    techTree.addTech('石工術', 'first');
    techTree.addTech('農業', 'first');
    techTree.addTech('法律', 'first');
    techTree.addTech('畜産', 'first');
    techTree.addTech('官吏', 'second');
    techTree.addTech('活版印刷', 'second');
    techTree.addTech('騎士道', 'second');
    techTree.addTech('鋳金', 'third');
    techTree.addTech('火薬', 'third');
    techTree.addTech('マスメディア', 'fourth');
  });

  describe('#hasTech', () => {
    it('returns true if it has the tech', () => {
      assert(techTree.hasTech('通貨') === true);
      assert(techTree.hasTech('官吏') === true);
      assert(techTree.hasTech('鋳金') === true);
      assert(techTree.hasTech('マスメディア') === true);
    });

    it('returns false if it does not have the tech', () => {
      assert(techTree.hasTech('航海術') === false);
      assert(techTree.hasTech('民主主義') === false);
      assert(techTree.hasTech('鉄道') === false);
      assert(techTree.hasTech('飛行機') === false);
    });
  });

  describe('#isAddable', () => {
    context('when level is first', () => {
      it('return true', () => {
        assert(techTree.isAddable('first') === true);
      });
    });

    context('when being less than number of lower tech if a tech studied', () => {
      it('return true', () => {
        assert(techTree.isAddable('second') === true);
      });
    });

    context('when becoming same as the number of lower tech if a tech studied', () => {
      it('return false', () => {
        assert(techTree.isAddable('third') === false);
        assert(techTree.isAddable('fourth') === false);
      });
    });
  });

  describe('#addTech', () => {
    it('addes a tech to the level', () => {
      techTree.addTech('通貨', 'first');
      techTree.addTech('騎士道', 'second');
      techTree.addTech('銀行制度', 'third');
      techTree.addTech('プラスチック', 'fourth');
      assert(_.last(techTree.first).id === '通貨');
      assert(_.last(techTree.second).id === '騎士道');
      assert(_.last(techTree.third).id === '銀行制度');
      assert(_.last(techTree.fourth).id === 'プラスチック');
    });

    it('addes a tech to foreign level', () => {
      techTree.addTech('プラスチック', 'third');
      assert(_.last(techTree.third).id === 'プラスチック');
    });

    it('does not add unknown tech', () => {
      var length = techTree.fourth.length;
      techTree.addTech('戦闘機', 'fourth');
      assert(techTree.fourth.length === length);
    });
  });

  describe('#removeTech', () => {
    it('removes a tech', () => {
      assert(techTree.hasTech('騎士道') === true);
      techTree.removeTech('騎士道');
      assert(techTree.hasTech('騎士道') === false);
    });

    it('does not change tree if unowned tech is given', () => {
      var firstLength = techTree.first.length;
      var secondLength = techTree.second.length;
      var thirdLength = techTree.third.length;
      var fourthLength = techTree.fourth.length;
      techTree.removeTech('飛行機');
      assert(techTree.first.length === firstLength);
      assert(techTree.second.length === secondLength);
      assert(techTree.third.length === thirdLength);
      assert(techTree.fourth.length === fourthLength);
    });
  });
});
