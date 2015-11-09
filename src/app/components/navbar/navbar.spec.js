'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import './navbar';
import NewGameDialogSetting from '../newGameDialog/newGameDialog';

describe('Component: navber', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var scope, element, modalSpy;

  beforeEach(inject(($rootScope, $compile, $uibModal) => {
    modalSpy = sinon.spy($uibModal, 'open');
    scope = $rootScope.$new();
    element = $compile('<navbar></navbar>')(scope);
    scope.$digest();
  }));

  it('shows new game link', ()=> {
    assert(_.contains(element.text(), 'New Game'));
  });

  it('opens new game dialog when new game link clicked', function () {
    element.find('#new-game-link').click();
    scope.$digest();
    assert(modalSpy.withArgs(NewGameDialogSetting).calledOnce);
  });
});
