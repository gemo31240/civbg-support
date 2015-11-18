'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import * as _ from 'lodash';
import 'angular-mocks';
import ElementHelper from '../../../../test/helper/elementHelper';
import NewGameDialogSetting from '../newGameDialog/newGameDialog';

describe('Component: Navbar', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var element, $uibModal;

  beforeEach(inject(($injector) => {
    $uibModal = $injector.get('$uibModal');
    sinon.stub($uibModal, 'open');
    element = new ElementHelper('<civbg-support-navbar></civbg-support-navbar>');
  }));

  it('shows new game link', ()=> {
    assert(_.contains(element.text(), 'New Game'));
  });

  it('opens new game dialog when new game link clicked', function () {
    element.find('#new-game-link').click();
    assert($uibModal.open.withArgs(NewGameDialogSetting).calledOnce);
  });
});
