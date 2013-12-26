'use strict';

/* Controllers */

angular.module('hexmas', []).
  controller('Hex', function HexmasCtrl($scope, $log) {
    var x, m, a, s = null;

    x = new Date(Date.now());
    // obviously christmas occurs in month 11
    m = new Date(x.getFullYear(), 11, 25);
    console.log(x.getMonth(), x.getDate())
    $scope.isItChristmas = (x.getMonth() === 11 && x.getDate() === 25);

    if (x > m) {
        m.setFullYear(x.getFullYear() + 1);
    }

    a = 24 * 60 * 60 * 1000;
    s = (m.getTime() - x.getTime()) / a;
    s = Math.ceil(s);
    // ^^ xmASS o.o

    $scope.hexDays = s.toString(16);
    $scope.decDays = s.toString(10);
  });