'use strict';

import * as _ from 'lodash';

export default function (tagOrElement, context) {
  var element;

  inject(($rootScope, $compile) => {
    function prepareElement(tag, context) {
      var scope = _.merge($rootScope.$new(), context);
      return $compile(tagOrElement)(scope);
    }

    element = _.isString(tagOrElement) ? prepareElement(tagOrElement, context) : tagOrElement;

    element.select = function (locator, labelOrValue) {
      var select = element.find(locator);
      var option = select.find('option[label="' + labelOrValue + '"]');
      var value = (option.size() > 0) ? option.val() : labelOrValue;
      select.val(value).trigger('change');
      $rootScope.$digest();
      return element;
    };

    var originalClick = element.click;
    element.click = function (locator) {
      if (locator) {
        element.find(locator).click();
        $rootScope.$digest();
        return element;
      } else {
        return originalClick.apply(element);
      }
    };

    $rootScope.$digest();
  });

  return element;
}
