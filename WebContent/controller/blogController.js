app.controller('BlogController',function($scope,$location,$rootScope,BlogService) {
	$scope.addBlog=function() {
		BlogService.addBlog($scope.post).then(
				function(response) {
					alert('Blogpost is added successfully and it is waiting for approval');
					$location.path('/home')
				},
				function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}

});