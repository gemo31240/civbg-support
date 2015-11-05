'use strict';

import * as angular from 'angular';
import {appName} from './constants';

interface ModuleOption {
  moduleName: string;
  componentName?: string;
}

interface NamedFunction extends Function {
  name: string;
}

export let inject = (...injectableNames: string[]) => {
  return (target: Function) => {
    target.$inject = injectableNames;
  };
};

//let controller = (componentName: string) => {
//  return (controllerClazz: Function) => {
//    let clazz = <NamedFunction>controllerClazz;
//    angular.module(appName).controller(componentName || clazz.name, clazz);
//  };
//};

export let service = (componentName: string) => {
  console.log(componentName);
  return (serviceClazz: Function) => {
    let clazz = <NamedFunction>serviceClazz;
    console.log(clazz.name);
    angular.module(appName).service(componentName || clazz.name, serviceClazz);
  };
};

//export default {
  //controller: controller,
  //inject: inject
  //service: service
//};
