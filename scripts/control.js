angular.module("hehe", [])
.controller("control", ["$scope", function($scope) {
		$scope.nodes = [
		{
			link : "#/today",class:"icon-home",content:"今日一刻"
		},{
			link : "#/older",class:"icon-file-empty",content:"往期内容"
		},{
			link : "#/category",class:"icon-menu",content:"栏目浏览"
		},
		{
			link : "#/author",class:"icon-pencil",content:"热门作者"
		},{
			link : "#/favourite",class:"icon-heart",content:"我的喜欢"
		},{
			link : "#/settings",class:"icon-cog",content:"设置"
		}
		]
}])
.controller("todaycontrol", ["$scope","$http", "$filter",'$rootScope',function($scope,$http,$filter,$rootScope) {
			var today = $filter("date")(new Date(),"yyyy-MM-dd");
			//console.log(today)
			$rootScope.show1 = false;
			$http({
				url:'./api/today.php',
				method:'get',
				params:{today:today}
			}).success(function(data){
				//var jsObj = JSON.parse(data)
				//var x = angular.toJson(data);
				//var b = angular.fromJson(x)
				$scope.datas = data.posts;
				$scope.day = data.date;
				$rootScope.show1 = true;
				
			})
}])
.controller("oldercontrol", ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {
	$rootScope.show1 = false;
		$http({
			url:"./api/older.php",
			method:"get",
		}).success(function(data){
			$scope.datas = data.posts;
			$scope.day = data.date;
			//console.log(data)
			$rootScope.show1 = true;
		})
}])
.controller("authorcontrol",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.show1 = false;
	$http({
		url:"./api/author.php",
		method:"get"
	}).success(function(data){
		$scope.all = data.all;
		$scope.hot = data.hot;
		$rootScope.show1 = true;
	})
}])
