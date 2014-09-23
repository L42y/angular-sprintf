angular.module('l42y.sprintf', [
]).filter('sprintf', function (
  $window
) {
  return function () {
    return $window.sprintf.apply(this, arguments);
  };
}).filter('vsprintf', function (
  $window
) {
  return function (format, array) {
    return $window.vsprintf(format, array);
  };
});
