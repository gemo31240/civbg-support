'use strict';

import 'jquery';
import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import './navbar';

describe('Component: navber', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var scope, element, $modalMock;

  beforeEach(inject(($rootScope, $compile, $uibModal) => {
    $modalMock = sinon.stub($uibModal);
    scope = $rootScope.$new();
    element = $compile('<navbar></navbar>')(scope);
    scope.$digest();
  }));

  it('shows new game link', ()=> {
    assert(_.contains(element.text(), 'New Game'));
  });

  it('opens new game dialog when new game link clicked', function () {
    assert($modalMock.expect('open').once().returns({result: {then: () => {}}}));
    element.find('#new-game-link').click();
    scope.$digest();
    //assert($modal.open.callCount === 1);
    $modalMock.verify();
  });
});
