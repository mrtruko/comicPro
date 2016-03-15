'use strict'

angular.module('comicProApp')
.controller('EditarUsuarioCtrl', function($scope, $stateParams, $meteor) {
      $scope.usuario = $meteor.object(Meteor.users, $stateParams.usuarioId,false).subscribe("users");
      console.log($scope.usuario);

      $scope.guardar = function(x){
        $scope.usuario.profile.displayName = $scope.usuario.profile.nombre + " " + $scope.usuario.profile.apellido;
        $scope.usuario.save().then(function(numberOfDocs){
          $scope.msgAlerta("Guardado","success");
        }, function(error){
          $scope.msgAlerta("Error Al Guardar","error");
        });
      }





      $scope.msgAlerta = function(msg,tipo){
    console.log(msg);

      }
});