app.factory('BlogService',function($http)
{
    var blogService={}
    
    blogService.addBlog = addBlog;
  
    
//RegisterService.blogpost{}
    function addBlog(post)
    {
     console.log("blog creation start")
        return $http.post("http://localhost:8180/BackEndCollaboration/createPost",post)
        console.log(post);
        console.log("Blog creation done")  
    }
    
 

    
return blogService;
})