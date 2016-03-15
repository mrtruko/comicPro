'use strict'

angular.module('comicProApp')
.config(function($stateProvider) {
  $stateProvider
    .state('login', {
    url: '/login',
    templateUrl: 'client/login/views/login.view.ng.html',
    controller: 'LoginCtrl',
    data: { pageTitle: 'Login', specialClass: 'gray-bg' },
    controllerAs: 'lc'
  }).state('logout', {
        url: '/logout',
        resolve: {
          "logout": ['$meteor', '$state', function($meteor, $state) {
            return $meteor.logout().then(function(){
              $state.go('login');
            }, function(err){
              console.log('logout error - ', err);
            });
          }]
        }
   });
});