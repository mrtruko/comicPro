'use strict'

angular.module('comicProApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/views/main.view.ng.html',
    controller: 'MainCtrl',
    resolve: {
      currentUser: ($q) => {
      if (Meteor.userId() == null) {
          return $q.reject('AUTH_REQUIRED');
        }else {
          return $q.resolve();
        }
      }
      }
  });
});