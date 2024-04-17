let app = angular.module('techApp', []);

app.controller('TechController', function($scope, $http){
    $http.get('database_content.json')
    .then(function(response){
        $scope.technologies = response.data;
    });

    $scope.selectedTech = "";

});