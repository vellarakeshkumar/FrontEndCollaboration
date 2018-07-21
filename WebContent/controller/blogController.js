app.controller('BlogController',function($scope,$location,$rootScope,BlogService,$routeParams) {
	var id=$routeParams.id;
	
	$scope.isRejected=false;
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
	
	
	if($rootScope.loggedInUser.role=='ROLE_ADMIN') {
		BlogService.getBlogsWaitingForApproval()
		.then(function(response) {
					$scope.blogsWaitingForApproval=response.data
				},function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	 BlogService.getBlogbyID(id).then(function(response) {
				 $scope.blog=response.data
				/* $scope.content=$sce.trustAsHtml($scope.blog.blogContent)*/
			 },function(response) {
				 $rootScope.error=response.data
				 if(response.status==401)
					 $location.path('/login')
			 })
	
        
	var status='APPROVED'	
			 
 $scope.approveOrRejectBlog = function(id,status,rejectionReason){
		 console.log("Blog Status")
		 /*
		 if(status === 'APPROVED'){*/
			 console.log("Approved")
			 BlogService.approveBlog(id,function(response){
			 
			 if (response.success) {
				
		 		console.log(response.data);
		 		/* getAllPendingBlogs();
				 viewAllBlogs(); 
				*/ alert("Blog approved Successfully");
				 $location.path("/blogsnotapproved")
		 		
		 	}else{
		 		if(response.status==401){
     				$location.path("/login");
     			}
		 		$scope.error = response.data;
		 		console.log( response.data)
		 		
		 	}
		 })
			 
		 }/*else if(status === 'REJECTED'){*/
			 console.log("Rejected")
			  BlogService.rejectBlog(id,rejectionReason,function(response){
			 
			 if (response.success) {
				
		 		console.log(response.data);
		 		 /*getAllPendingBlogs();
				 viewAllBlogs();*/ 
				 $location.path("/blogsnotapproved")
		 	}else{
		 		if(response.status==401){
     				$location.path("/login");
     			}
		 		console.log( response.data)
		 		
		 	}
		 })
		 }
		
		
	 }
			 
	
	 
	 
	 $scope.showRejectionTxt=function(val){
			$scope.isRejected=val;
	}
	 
	 
			 
});