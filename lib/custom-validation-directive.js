(function (app) {
    "use strict";
    app.directive('ensureUnique', function () {
        return {
            restrict: 'A',
            scope: { list: '=' },
            require: 'ngModel',
            controller: function () {
            },
            link: function (scope, element, attrs, ngModel) {
                element.bind('keyup', function (e) {
                    if (!ngModel || !element.val()) return;
                    //var keyProperty = scope.$eval(attrs.ensureUnique);
                    var currentValue = element.val();
                    var unique = true;
                    for (var i = 0; i < scope.list.length; i++) {
                        if (scope.list[i].name.toLowerCase() == currentValue.toLowerCase()) {
                            unique = false;
                            break;
                        }
                    }
                    scope.$apply(function () {
                        ngModel.$setValidity('unique', unique);
                    });
                    return;
                });
            }
        }
    });
})(application);