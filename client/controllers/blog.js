// Generated by CoffeeScript 1.7.1
ngMeteor.controller('BlogDetailCtrl', [
  '$scope', '$routeParams', function($scope, $routeParams) {
    blogs.findOne({
      _id: $routeParams.id
    });
    console.log($routeParams.id, 111, _blog);
    return $scope.blog = _blog;
  }
]);

ngMeteor.controller('BlogCtrl', [
  '$scope', '$routeParams', '$collection', '$location', function($scope, $routeParams, $collection, $location) {
    if ($routeParams.id) {
      $scope.blog = blogs.findOne({
        _id: $routeParams.id
      });
    }
    $collection("blogs", $scope, {}, {
      sort: {
        createTime: -1
      }
    });
    $scope.save = function(blog) {
      if (!blog._id) {
        blog.createTime = new Date();
      }
      blog.updateTime = new Date();
      $scope.blogs.add(blog);
      $scope.blog = null;
      return $location.path('/blogs');
    };
    return $scope.del = function(blog) {
      $scope.blogs["delete"](blog);
      $scope.blog = null;
      return $location.path('/blogs');
    };
  }
]);
