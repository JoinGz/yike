var app = angular.module("App", ["hehe", 'ngRoute', ]);
app.run(["$rootScope", function($rootScope) {
	$rootScope.done = false;
	$rootScope.toggle = function() {
		$rootScope.done = !$rootScope.done;
		var a = document.getElementsByClassName('viewport')[0].firstElementChild;
		var a1 = a.firstElementChild;
		var navs = a1.getElementsByTagName('dd');
		if($rootScope.done) {
			//			for(var i=0;i<navs.length;i++){
			//				navs[i].style.transform = "translate(0)";
			//				navs[i].style.transitionDelay="0.2s";
			//				navs[i].style.transitionDuration=(i + 1) * 0.15 + 's';
			//			};
			for(var i = 0; i < navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}
		} else {
			var len = navs.length - 1;
			for(var j = len; j > 0; j--) {
				// console.log(navs.length - j + 1);
				navs[j].style.transform = 'translate(-100%)';
				navs[j].style.transitionDelay = '';
				navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
			}
		}

	}
}]);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/today", {
		templateUrl: "./views/today.html",
		controller: "todaycontrol"
	}).when("/older", {
		templateUrl: "./views/older.html",
		controller: "oldercontrol"
	}).when("/category",{
		templateUrl: "./views/category.html",
		controller: "categorycontrol"
	}).when("/author",{
		templateUrl: "./views/author.html",
		controller: "authorcontrol"
	}).when("/favourite",{
		templateUrl: "./views/favourite.html",
		controller: "favouritecontrol"
	}).when("/settings",{
		templateUrl: "./views/settings.html",
		controller: "settingscontrol"
	}).otherwise({
		redirectTo: '/today',
	})
}]);