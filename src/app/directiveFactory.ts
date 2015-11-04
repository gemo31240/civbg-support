//'use strict';
//
//function build(directiveName: string): ng.IDirectiveFactory {
//  console.log(directiveName);
//  var factory = (...args: any[]): ng.IDirective => {
//    var newInstance = Object.create(CivBgSupportApp[directiveName].prototype);
//    //var newInstance = Object.create(classType.prototype);
//    console.log(newInstance);
//    newInstance.constructor.apply(newInstance, args);
//    return newInstance;
//  };
//  //factory.$inject = classType.$inject || [];
//  return factory;
//}
//
//export = build;
