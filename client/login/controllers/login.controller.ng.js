'use strict'
function translateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}
angular.module('comicProApp')
.controller('LoginCtrl', function($scope,$rootScope,$meteor,$window,$state,$reactive) {
    $reactive(this).attach($scope);
    if(Meteor.userId()){
        $state.go("main");
    }
    this.credentials = {
        email: '',
        password: ''
    };
    this.error = '';

    this.login = () => {

        Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (err) => {
            if (err) {
                this.error = err;
                }
                    else {
                        $state.go('main');
            }
    });
    };
      $scope.viewName = 'Login';

}).controller('translateCtrl', translateCtrl);