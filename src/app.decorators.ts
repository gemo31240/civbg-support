'use strict';

import * as angular from 'angular';
import * as _ from 'lodash';
import {appName} from './constants';

export function getClassName(clazz: Function) {
  var funcNameRegex = /function (.{1,})\(/;
  var results = (funcNameRegex).exec((clazz).toString());
  return (results && results.length > 1) ? results[1] : "";
}

interface IInjectable extends Function {
  $inject: string[];
}

export let inject = (...injectableNames: string[]) => {
  return (target: Function) => {
    (<IInjectable>target).$inject = injectableNames;
  };
};

export let service = (clazz: Function) => {
  if (!clazz.name) {
    //
    clazz.name = getClassName(clazz);
  }
  angular.module(appName).service(clazz.name, clazz);
};

export let directive = (componentName: string) => {
  return (clazz: Function) => {
    var factory: ng.IDirectiveFactory = (...args: any[]): ng.IDirective => {
      var newInstance = new Object(clazz.prototype);
      clazz.apply(newInstance, args);
      return newInstance;
    };
    factory.$inject = clazz.$inject || [];
    angular.module(appName).directive(componentName, factory);
  };
};
