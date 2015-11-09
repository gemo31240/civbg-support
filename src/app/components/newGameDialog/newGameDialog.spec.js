'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import NewGameDialogSetting from './newGameDialog';

describe('Component: newGameDialog', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var scope, element, modalSpy, $modalInstance;

  beforeEach(inject(($rootScope, $compile, $uibModal) => {
    $modalInstance = $uibModal.open(NewGameDialogSetting);
    element = angular.element('body').find('#new-game-dialog');
    //modalSpy = sinon.spy($uibModal, 'open');
    //scope = $rootScope.$new();
    //element = $compile('<navbar></navbar>')(scope);
    $rootScope.$digest();
  }));

  it('shows new game link', ()=> {
    assert(_.contains(element.text(), 'プレイヤーの文明と色を選んでください。'));
  });

  //it('opens new game dialog when new game link clicked', function () {
  //  element.find('#new-game-link').click();
  //  scope.$digest();
  //  assert(modalSpy.withArgs(NewGameDialogSetting).calledOnce);
  //});
});
