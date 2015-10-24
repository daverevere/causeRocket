

angular.module('App', ['ngRoute'])


angular.module('App')
	.config(['$routeProvider', function($routeProvider){
	
		$routeProvider
			.when('/', {
				templateUrl : '/html/intro.html',
				controller : 'mainController'
			})
			.when('/part1/:user', {
				templateUrl : '/html/user.html',
				controller : 'userController'
			})
			.when('/part2a/:user', {
				templateUrl : '/html/part2a.html',
				controller : 'userController'
			})
			.when('/error', {
				templateUrl : 'html/error.html',
				controller : 'errorController'
			})
			.otherwise({
				redirectTo : '/error'
			})

	}])


//.toISODate
//nonce is arbitrary
//api key

angular.module('App')
	.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location){

		$scope.title = "Adventure site"

		$http.get('/api/users')
			.then(function(returnData){
				$scope.users = returnData.data
			})

		$scope.createUser = function(){

			$http.post('/api/users', $scope.newUser) 
				.then(function(returnData){ 
		
				})

		}

		$scope.start = function(){
			$location.path('/part1/' + $scope.newUser.name)

		}

		$scope.part2a = function(){
			$location.path('/part2a/' + $scope.newUser.name)

		}

		$scope.part2b = function(){
			$location.path('/part2b/' + $scope.newUser.name)

		}


	


		
	}])

angular.module('App')
	.controller('userController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var userName = $routeParams.user

	
			console.log(userName)
		$http.get('/api/users/' + userName)
			.then(function(returnData){
				$scope.user = returnData.data
			})

	}])

angular.module('App')
	.controller('errorController', ['$scope', function($scope){

	}])