angular.module('reg')
  .controller('TeamCtrl', [
    '$scope',
    'currentUser',
    'settings',
    'Utils',
    'UserService',
    'TEAM',
    function($scope, currentUser, settings, Utils, UserService, TEAM){
      // Get the current user's most recent data.
      var Settings = settings.data;

      $scope.regIsOpen = Utils.isRegOpen(Settings);

      $scope.user = currentUser.data;

      $scope.TEAM = TEAM;

      $scope.showNote = !$scope.user.teamCode;

      function _populateTeammates() {
        UserService
          .getMyTeammates()
          .then(response => {
            $scope.error = null;
            $scope.teammates = response.data;
          });
      }

      if ($scope.user.teamCode){
        _populateTeammates();
      }

      $scope.createTeam = function() {
        UserService.createTeam($scope.code)
          .then(response => {
            $scope.error = null;
            $scope.user = response.data;
            $scope.showNote = false;
            _populateTeammates();
          })
          .catch(response => {
            $scope.error = response.data.message;
          });
      };
      $scope.joinTeam = function() {
        UserService.joinTeam($scope.code)
          .then(response => {
            $scope.error = null;
            $scope.user = response.data;
            $scope.showNote = false;
            _populateTeammates();
          })
          .catch(response => {
            $scope.error = response.data.message;
          });
      };
      
      $scope.leaveTeam = function(){
        UserService
          .leaveTeam()
          .then(response => {
            $scope.error = null;
            $scope.user = response.data;
            $scope.teammates = [];
            $scope.showNote = true;
          }, response => {
            $scope.error = response.data.message;
          });
      };

    }]);
