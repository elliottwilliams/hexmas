'use strict';

/* Directives */

angular.module('hexmas.directives', []).
  directive('isItChristmas',['date', function(date) {
    return function(scope) {
        alert (date)
        return "yes";
    }
  }]);
