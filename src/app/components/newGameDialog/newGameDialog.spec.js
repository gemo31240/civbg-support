'use strict';

import assert from 'power-assert';
import sinon from 'sinon';
import 'angular-mocks';
import ElementHelper from '../../../../test/helper/elementHelper';
import NewGameDialogSetting from './newGameDialog';

describe('Component: NewGameDialog', ()=> {
  beforeEach(angular.mock.module('civbgSupport'));
  beforeEach(angular.mock.module('templates'));

  var element, $rootScope, PlayerRepository, $modalInstance;

  beforeEach(inject(($injector, $uibModal) => {
    $rootScope = $injector.get('$rootScope');
    PlayerRepository = $injector.get('PlayerRepository');
    $modalInstance = $uibModal.open(NewGameDialogSetting);
    $rootScope.$digest();
    element = new ElementHelper(angular.element('body').find('#new-game-dialog'));
  }));

  afterEach(() => {
    element.remove();
  });

  it('shows notification', ()=> {
    assert(element.text().indexOf('プレイヤーの文明と色を選んでください。') >= 0);
  });

  describe('when first player color is selected', () => {
    beforeEach(() => {
      element.select('#new-game-color-1', 'RED');
    });

    it('removes selected color from others selection', ()=> {
      assert(element.find('#new-game-color-2').text().indexOf('RED') === -1);
      assert(element.find('#new-game-color-3').text().indexOf('RED') === -1);
      assert(element.find('#new-game-color-4').text().indexOf('RED') === -1);
    });

    describe('when second player color is selected', () => {
      beforeEach(() => {
        element.select('#new-game-color-2', 'BLUE');
      });

      it('removes selected color from others selection', () => {
        assert(element.find('#new-game-color-3').text().indexOf('RED') === -1);
        assert(element.find('#new-game-color-3').text().indexOf('BLUE') === -1);
        assert(element.find('#new-game-color-4').text().indexOf('RED') === -1);
        assert(element.find('#new-game-color-4').text().indexOf('BLUE') === -1);
      });

      describe('when third player color is selected', () => {
        beforeEach(() => {
          element.select('#new-game-color-3', 'GREEN');
        });

        it('removes selected color from others selection', () => {
          assert(element.find('#new-game-color-4').text().indexOf('RED') === -1);
          assert(element.find('#new-game-color-4').text().indexOf('BLUE') === -1);
          assert(element.find('#new-game-color-4').text().indexOf('GREEN') === -1);
        });
      });
    });
  });

  describe('when civilizations and colors are selected', () => {
    beforeEach(() => {
      element.select('#new-game-civilization-1', 'アステカ');
      element.select('#new-game-civilization-2', 'アメリカ');
      element.select('#new-game-civilization-3', 'アラブ');
      element.select('#new-game-civilization-4', 'イギリス');
      element.select('#new-game-color-1', 'RED');
      element.select('#new-game-color-2', 'GREEN');
      element.select('#new-game-color-3', 'BLUE');
      element.select('#new-game-color-4', 'YELLOW');
    });

    it('hides notification', () => {
      assert(element.text().indexOf('プレイヤーの文明と色を選んでください。') === -1);
    });

    it('enables start button', () => {
      assert(element.find('#new-game-start-button').is(':disabled') === false);
    });

    describe('when start button is clicked', () => {
      var startNewGameSpy, closeSpy;

      beforeEach(() => {
        startNewGameSpy = sinon.spy(PlayerRepository, 'startNewGame');
        closeSpy = sinon.spy($modalInstance, 'close');
        element.click('#new-game-start-button');
      });

      it('starts new game', () => {
        assert(startNewGameSpy.called);
      });

      it('closes dialog', () => {
        assert(closeSpy.called);
      });
    });
  });
});
