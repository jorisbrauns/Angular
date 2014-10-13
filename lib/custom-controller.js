(function () {
    "use strict";
    angular.module("YourNameOfModule")
    .controller("BookController", function () {
        var self = this;
        this.myList = [
            { name: 'C# is the bomb!', price: 42 },
            { name: 'AngularJS', price: 10 },
            { name: 'Xamarin Cross-platform Application Development', price: 199.99 },
            { name: 'Java is a joke!', price: 10 },
            { name: 'Learning AngularJS', price: 35.75 }
        ];

        this.add = function (isValid) {
            if (isValid) {
                this.myList.push(
                    {
                        name: this.book.name,
                        price: this.book.price
                    }
                );
                this.book = {};
            }
        };
    })
    .controller("OtherController", ['$scope', function ($scope) {

        $scope.init = function () {
            $scope.message = "Hallo wereld";
        }

        $scope.init();
    }]);
})();