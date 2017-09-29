angular.module("hehe", [])
.controller("control", ["$scope", function($scope) {
		$scope.nodes = [
		{
			link : "#/today",class:"icon-home",content:"今日一刻"
		},{
			link : "#/older",class:"icon-file-empty",content:"往期内容"
		}
		]
}])
.controller("todaycontrol", ["$scope","$http", function($scope,$http) {
			$http({
				url:'./api/today.php',
				method:'get',
			}).success(function(data){
				//var jsObj = JSON.parse(data)
				//var x = angular.toJson(data);
				//var b = angular.fromJson(x)
				$scope.datas = data;
				console.log(data)
			})
}])
.controller("oldercontrol", ["$scope", function($scope) {
		
}])