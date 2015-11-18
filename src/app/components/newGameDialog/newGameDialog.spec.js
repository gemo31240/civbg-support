'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import NewGameDialogSetting from './newGameDialog';

describe('Component: newGameDialog', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var element,  $rootScope, PlayerRepository;

  beforeEach(inject(($injector, $uibModal) => {
    $rootScope = $injector.get('$rootScope');
    PlayerRepository = $injector.get('PlayerRepository');
    $uibModal.open(NewGameDialogSetting);
    $rootScope.$digest();
    element = angular.element('body').find('#new-game-dialog');
  }));

  afterEach(() => {
    element.remove();
  });

  //it('shows new game link', ()=> {
  //  assert(_.contains(element.text(), 'プレイヤーの文明と色を選んでください。'));
  //});

  it('opens new game dialog when new game link clicked', function () {
    var spy = sinon.spy(PlayerRepository, 'startNewGame');
    element.find('#new-game-start-button').click().trigger('click');
    $rootScope.$digest();
    assert(spy.called);
  });
});
