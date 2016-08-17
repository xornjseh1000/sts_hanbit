// var application = (function(){})();  IIFE 패턴
var application = (function(){
	var init = function(param) {
		sessionStorage.setItem('context',param);
	};
	var getContextPath = function(){
		return sessionStorage.getItem('context');
	};
	var to_douglas = function() {
		location.href=getContextPath()+"/douglas.do";
	};
	var go_home = function(){
		location.href=getContextPath()+"/home.do";
	}
	return {
		init : init,
		to_douglas : to_douglas,
		go_home : go_home
	}
})();