app.factory('BlogService',function($http)
{
	
	var BASE_URL='http://localhost:8180/BackEndCollaboration';
    var blogService={}
    
    blogService.addBlog = addBlog;
    blogService.getBlogsWaitingForApproval=getBlogsWaitingForApproval;
    blogService.getBlogbyID=getBlogbyID;
    blogService.approveBlog=approveBlog;
    blogService.rejectBlog=rejectBlog;
    
//RegisterService.blogpost{}
    function addBlog(post)
    {
     console.log("blog creation start")
        return $http.post(BASE_URL+'/createPost',post)
        console.log(post);
        console.log("Blog creation done")  
    }
    
    function getBlogsWaitingForApproval()
    {
    	console.log("pending blog")
    	return $http.get(BASE_URL+'/viewPendingPosts')
    	console.loging("pending blog service fetched")
    	
    }
    function getBlogbyID(id)
{
    	//select  * from post where id=?
    	console.log("fetching blog records based on id")
    	return $http.get(BASE_URL+'/viewPostById/'+id)
    	console.log("Fetched blog record based on id")
} 

    function approveBlog(id)
    {
    	console.log("Blogs apprroval")
    	return $http.get(BASE_URL+'/approvePost/'+id)
    	
    }
    
    function rejectBlog(id)
    {
    	console.log("Blogs rejeect")
    	return $http.get(BASE_URL+'/rejectPost/'+id)
    	
    }
    
    
return blogService;
})