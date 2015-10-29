

angular.module('App', ['ngRoute'])


angular.module('App')
	.config(['$routeProvider', function($routeProvider){
	
		$routeProvider
			.when('/', {
				templateUrl : '/html/home.html',
				controller : 'mainController'
			})
			.when('/test:user', {
				templateUrl : '/html/test.html',
				controller : 'userController'
			})
			.when('/intro/:user', {
				templateUrl : '/html/intro.html',
				controller : 'userController'
			})
			.when('/extroversion/:user', {
				templateUrl : '/html/part1/extroversion.html',
				controller : 'userController'
			})
			.when('/introversion/:user', {
				templateUrl : '/html/part1/introversion.html',
				controller : 'userController'
			})
			.when('/eIntuition/:user', {
				templateUrl : '/html/part2/e-intuition.html',
				controller : 'userController'
			})
			.when('/eSensing/:user', {
				templateUrl : '/html/part2/e-sensing.html',
				controller : 'userController'
			})
			.when('/iIntuition/:user', {
				templateUrl : '/html/part2/i-intuition.html',
				controller : 'userController'
			})
			.when('/iSensing/:user', {
				templateUrl : '/html/part2/i-sensing.html',
				controller : 'userController'
			})
			.when('/enFeeling/:user', {
				templateUrl : '/html/part3/en-feeling.html',
				controller : 'userController'
			})
			.when('/enThinking/:user', {
				templateUrl : '/html/part3/en-thinking.html',
				controller : 'userController'
			})
			.when('/esFeeling/:user', {
				templateUrl : '/html/part3/es-feeling.html',
				controller : 'userController'
			})
			.when('/esThinking/:user', {
				templateUrl : '/html/part3/es-thinking.html',
				controller : 'userController'
			})
			.when('/inFeeling/:user', {
				templateUrl : '/html/part3/in-feeling.html',
				controller : 'userController'
			})
			.when('/inThinking/:user', {
				templateUrl : '/html/part3/in-thinking.html',
				controller : 'userController'
			})
			.when('/isFeeling/:user', {
				templateUrl : '/html/part3/is-feeling.html',
				controller : 'userController'
			})
			.when('/isThinking/:user', {
				templateUrl : '/html/part3/is-thinking.html',
				controller : 'userController'
			})
			.when('/enfj/:user', {
				templateUrl : '/html/part4/enfj.html',
				controller : 'userController'
			})
			.when('/enfp/:user', {
				templateUrl : '/html/part4/enfp.html',
				controller : 'userController'
			})
			.when('/entj/:user', {
				templateUrl : '/html/part4/entj.html',
				controller : 'userController'
			})
			.when('/entp/:user', {
				templateUrl : '/html/part4/entp.html',
				controller : 'userController'
			})
			.when('/esfj/:user', {
				templateUrl : '/html/part4/esfj.html',
				controller : 'userController'
			})
			.when('/esfp/:user', {
				templateUrl : '/html/part4/esfp.html',
				controller : 'userController'
			})
			.when('/estj/:user', {
				templateUrl : '/html/part4/estj.html',
				controller : 'userController'
			})
			.when('/estp/:user', {
				templateUrl : '/html/part4/estp.html',
				controller : 'userController'
			})
			.when('/infj/:user', {
				templateUrl : '/html/part4/infj.html',
				controller : 'userController'
			})			
			.when('/infp/:user', {
				templateUrl : '/html/part4/infp.html',
				controller : 'userController'
			})			
			.when('/intj/:user', {
				templateUrl : '/html/part4/intj.html',
				controller : 'userController'
			})			
			.when('/intp/:user', {
				templateUrl : '/html/part4/intp.html',
				controller : 'userController'
			})			
			.when('/isfj/:user', {
				templateUrl : '/html/part4/isfj.html',
				controller : 'userController'
			})			
			.when('/isfp/:user', {
				templateUrl : '/html/part4/isfp.html',
				controller : 'userController'
			})			
			.when('/istj/:user', {
				templateUrl : '/html/part4/istj.html',
				controller : 'userController'
			})			
			.when('/istp/:user', {
				templateUrl : '/html/part4/istp.html',
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
	
	$scope.title = "What To Do"
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
			$http.post('/api/users', $scope.newUser).then(function  (returnData) {
				$scope.tempUser = returnData.data
				
			}) 

			$location.path('/intro/' + $scope.newUser.name)
			console.log($scope.newUser)
		}
		// $scope.part2b = function(){
		// 	$location.path('/part2b/' + $scope.newUser.name)
		// }
	}])

angular.module('App')
	.controller('userController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
		var userName = $routeParams.user
		// $http.get('/api/users').then(function  (returnData) {
		// 	console.log(returnData.data)

		// })
			console.log(userName)
		$http.get('/api/users/' + userName)
			.then(function(returnData){
				$scope.user = returnData.data
				console.log("lher", $scope.user)
			})
		$scope.extroversion = function(){		
			$location.path('/extroversion/' + $scope.user.name)

		}
		$scope.introversion = function(){		
			$location.path('/introversion/' + $scope.user.name)

		}
		$scope.eIntuition = function(){		
			$location.path('/eIntuition/' + $scope.user.name)

		}
		$scope.eSensing = function(){		
			$location.path('/eSensing/' + $scope.user.name)

		}
		$scope.iIntuition = function(){		
			$location.path('/iIntuition/' + $scope.user.name)

		}
		$scope.iSensing = function(){		
			$location.path('/iSensing/' + $scope.user.name)

		}
		$scope.enFeeling = function(){		
			$location.path('/enFeeling/' + $scope.user.name)

		}
		$scope.enThinking = function(){		
			$location.path('/enThinking/' + $scope.user.name)

		}
		$scope.esFeeling = function(){		
			$location.path('/esFeeling/' + $scope.user.name)

		}
		$scope.esThinking = function(){		
			$location.path('/esThinking/' + $scope.user.name)

		}
		$scope.inThinking = function(){		
			$location.path('/inThinking/' + $scope.user.name)

		}
		$scope.isFeeling = function(){		
			$location.path('/isFeeling/' + $scope.user.name)

		}
		$scope.isThinking = function(){		
			$location.path('/isThinking/' + $scope.user.name)

		}
		$scope.enfj = function(){		
			$location.path('/enfj/' + $scope.user.name)

		}
		$scope.enfp = function(){		
			$location.path('/enfp/' + $scope.user.name)

		}
		$scope.entj = function(){		
			$location.path('/entj/' + $scope.user.name)

		}
		$scope.entp = function(){		
			$location.path('/entp/' + $scope.user.name)

		}
		$scope.esfp = function(){		
			$location.path('/esfp/' + $scope.user.name)

		}
		$scope.estj = function(){		
			$location.path('/estj/' + $scope.user.name)

		}
		$scope.estp = function(){		
			$location.path('/estp/' + $scope.user.name)

		}
		$scope.infj = function(){		
			$location.path('/infj/' + $scope.user.name)

		}
		$scope.infp = function(){		
			$location.path('/infp/' + $scope.user.name)

		}
		$scope.intj = function(){		
			$location.path('/intj/' + $scope.user.name)

		}		
		$scope.intp = function(){		
			$location.path('/intp/' + $scope.user.name)

		}		
		$scope.isfj = function(){		
			$location.path('/isfj/' + $scope.user.name)

		}		
		$scope.isfp = function(){		
			$location.path('/isfp/' + $scope.user.name)

		}		
		$scope.istj = function(){		
			$location.path('/istj/' + $scope.user.name)

		}
		$scope.istp = function(){		
			$location.path('/istp/' + $scope.user.name)

		}
		$scope.home = function(){
			$http.delete('/api/users')
			$location.path('/')

		}


	}])

angular.module('App')
	.controller('errorController', ['$scope', function($scope){

	}])