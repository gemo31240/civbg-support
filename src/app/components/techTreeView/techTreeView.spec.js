'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import ElementHelper from '../../../../test/helper/elementHelper';
import TechTree from '../../models/techTree';

describe('Component: TechTreeView', () => {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var element, techTree;

  beforeEach(inject(($injector) => {
    techTree = new TechTree();
    techTree.addTech('通貨', 'first');
    var context = {techTree: techTree};
    element = new ElementHelper('<civbg-support-tech-tree-view tree="techTree"></civbg-support-tech-tree-view>', context);
  }));

  it('shows beginning tech', () => {
    assert(_.trim(element.find('.tech-first .tech-list-item:first-child').text()) === '通貨');
  });

  it('shows tech selection', () => {
    assert(element.find('.tech-first .tech-list-add').size() === 1);
  });

  context('when next first tech is selected', () => {
    beforeEach(() => {
      element.select('.tech-first .add-tech-select', '畜産');
    });

    it('adds a tech', () => {
      assert(element.find('.tech-first .tech-list-item').size() === 2);
    });

    it('shows second level tech selection', () => {
      assert(element.find('.tech-second .tech-list-add').size() === 1);
    });

    context('when remove icon is clicked', () => {
      beforeEach(() => {
        element.click('.tech-second .tech-list-item:last-child .remove-icon');
      });

      it('removes a tech', () => {
        assert(element.find('.tech-second .tech-list-item').size() === 0);
      });
    });

    context('when second tech is added', () => {
      beforeEach(() => {
        element.select('.tech-second .add-tech-select', '官吏');
      });

      context('when a first tech is removed', () => {
        beforeEach(() => {
          element.click('.tech-first .test-list-item:last-child .remove-icon');
        });

        it('hides second level add tech selection', () => {
          assert(element.find('.tech-second .tech-list-add').size() === 0);
        });

        it('does not removes unbalance tech', () => {
          assert(element.find('.tech-second .tech-list-item').size() === 1);
          assert(_.trim(element.find('.tech-second .tech-list-item').text()) === '官吏');
        });
      });
    });
  });

  it('can create tech tree to fourth level', () => {
    element.select('.tech-first .add-tech-select', '畜産');
    element.select('.tech-first .add-tech-select', '法律');
    element.select('.tech-first .add-tech-select', '石工術');
    element.select('.tech-second .add-tech-select', '官吏');
    element.select('.tech-second .add-tech-select', '活版印刷');
    element.select('.tech-second .add-tech-select', '民主主義');
    element.select('.tech-third .add-tech-select', '火薬');
    element.select('.tech-third .add-tech-select', '鉄道');
    element.select('.tech-fourth .add-tech-select', 'コンピューター');
    assert(_.trim(element.find('.tech-fourth .tech-list-item:first-child').text()) === 'コンピューター');
  });
});
