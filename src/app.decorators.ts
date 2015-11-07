'use strict';

import * as angular from 'angular';
import * as _ from 'lodash';
import {appName} from './constants';

class Directive implements ng.IDirective {
}

export function getClassName(clazz: Function) {
  var funcNameRegex = /function (.{1,})\(/;
  var results = (funcNameRegex).exec((clazz).toString());
  return (results && results.length > 1) ? results[1] : "";
}

export let inject = (...injectableNames: string[]) => {
  return (target: Function) => {
    target.$inject = injectableNames;
  };
};

export let serviceOf = (componentName: string) => {
  return (clazz: Function) => {
    if (!clazz.name) {
      clazz.name = getClassName(clazz);
    }
    angular.module(appName).service(componentName || clazz.name, clazz);
  };
};

export let service = (clazz: Function) => {
  if (!clazz.name) {
    clazz.name = getClassName(clazz);
  }
  angular.module(appName).service(clazz.name, clazz);
};

export let directive = (componentName: string) => {
  return (clazz: Function) => {
    var factory: ng.IDirectiveFactory = (...args: any[]): ng.IDirective => {
      //args.unshift(null);
      //args.unshift(clazz);
      //var newInstance = new (<typeof Directive>(_.bind.apply(null, args)));

      var newInstance = new Object(clazz.prototype);
      clazz.apply(newInstance, args);
      return newInstance;
    };
    factory.$inject = clazz.$inject || [];
    angular.module(appName).directive(componentName, factory);
  };
};
