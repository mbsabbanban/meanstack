angular.module('app', ['ngRoute'])

	//----------
	// Routes
	//----------
	
    .config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
		    .when('/', {
			    templateUrl: '/todos.html',
				controller: 'TodoController'
			})
			
			.when('/:id', {
				templateUrl: '/todoDetails.html',
				controller: 'TodoDetailCtrl'
			})

    }])
	
    .factory('Todos', function () {
      return [
			{ name: 'Master HTML/CSS/Javascript', completed: true, note: 'add notes...' },
			{ name: 'Learn AngularJS', completed: false, note: 'add notes...' },
			{ name: 'Build NodeJS backend', completed: false, note: 'add notes...' },
			{ name: 'Get started with ExpressJS', completed: false, note: 'add notes...' },
			{ name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
			{ name: 'Be awesome!', completed: false, note: 'add notes...' }
		];
    })

	//----------
	// Controllers
	//----------
	
	// This controller manages landing page, "/todos.html"    
	.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
		$scope.todos = Todos;

    }])
	
	.controller('TodoDetailCtrl',['$scope', '$routeParams', 'Todos', function($scope, $routeParams, Todos){
		$scope.todo = Todos[$routeParams.id];
	}]);