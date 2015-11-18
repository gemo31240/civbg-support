//'use strict';
//
//export default function (element) {
//  inject(($rootScope) => {
//    element.select = function (locator, labelOrValue) {
//      var select = element.find(locator);
//      var option = select.find('option[label="' + labelOrValue + '"]');
//      var value = (option.size() > 0) ? option.val() : labelOrValue;
//      select.val(value).trigger('change');
//      $rootScope.$digest();
//      return element;
//    };
//
//    var originalClick = element.click;
//    element.click = function (locator) {
//      if (locator) {
//        element.find(locator).click();
//        $rootScope.$digest();
//        return element;
//      } else {
//        return originalClick.apply(element);
//      }
//    };
//
//    $rootScope.$digest();
//  });
//  return element;
//}
