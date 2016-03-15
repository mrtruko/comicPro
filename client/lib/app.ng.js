angular.module('comicProApp', [
  'angular-meteor',
  'ui.router',
  'angularUtils.directives.dirPagination',
  'ui.bootstrap',
  'ngFileUpload',
  'pascalprecht.translate'
]);

onReady = function() {
  angular.bootstrap(document, ['comicProApp']);

};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}