var app = angular.module('myApp', []);
app.directive('makeEditable', function () {
    return {
        restrict: 'AE',
        scope: true,
        link: function (scope, element, attrs) {
            scope.text = "This content is editable. Just hit edit to change it!";
            scope.editable = false;
            scope.editStatus = false;

            scope.edit = function () {
                scope.editStatus = true;
                scope.editable = true;
                console.log('edit button hit');
            };

            scope.save = function () {
                scope.editStatus = false;
                scope.editable = false;
                console.log('save button hit');
            };
        }
    }
});
