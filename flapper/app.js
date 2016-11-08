var app = angular.module('flapperNews', ['ui.router']); //external module dependencies get added inside the brackets

app.controller('MainCtrl', [ '$scope', 'posts', function($scope, posts){
  $scope.test = 'Hello World!'; // $scope is limited to the controller - factories/services - functions that are tied to the $scope
  
  $scope.posts = posts.posts; //Data bind $scope with post array in service
  
  // Function that will allow us to add an object into the posts array
  $scope.addPost = function(){
	if(!$scope.title || $scope.title === ''){ return; };
	$scope.posts.push({
	title: $scope.title, 
	link: $scope.link, 
	upvotes: 0,
	comments: [
	  {author: 'Joe', body: 'Cool post!', upvotes: 0},
      {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes:0}
	]
	});

/*	
	$scope.title = '';
	$scope.link = '';
*/
  };
  
  // Function that increments Votes
  $scope.incrementUpvotes = function(post){
	  post.upvotes += 1;
  };
  
}]);

app.controller('PostsCtrl',[
		'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts){
	  
	$scope.addComment = function(){
		if($scope.body === ''){ return; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});	
		$scope.body = '';
	};
	
    $scope.post = posts.posts[$stateParams.id];
	  
}]);

app.factory('posts', [function(){
	//service body
	var o = {
	
	  posts: []
	
	};
	
	/* Commenting out dummy post data
		posts: [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}]
	};
	
	*/
	
	return o;
}]);

// Built in Angular Routing via the app.config() - this breaks my page though


app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
	  
	  $stateProvider.state('home',{
		  url: '/home',
		  templateUrl: '/home.html',
		  controller: 'MainCtrl'
	  });
	  
	  $stateProvider.state('posts',{
		  url: '/posts/{id}',
		  templateUrl: '/posts.html',
		  controller: 'PostsCtrl'
	  });
	  
  $urlRouterProvider.otherwise('home');
}]);