define(["app", "js/index/indexView"], function(app, IndexView) {
	var $ = Framework7.$;
	
	var bindings = [{
		element: '.list-panel-now',
		event: 'click',
		handler: showNow
	}, {
		element: '.list-panel-top-rated',
		event: 'click',
		handler: showTopRated
	}, {
		element: '.list-panel-upcoming',
		event: 'click',
		handler: showUpcoming
	}, {
		element: '.list-panel-popular',
		event: 'click',
		handler: showPopular
	}];

	function init() {
		app.f7.showIndicator(); 
		
		showNow();
	}
	
	function showNow(){	
		theMovieDb.movies.getNowPlaying({}, successCB, errorCB);
	}
	
	function showTopRated(){
		theMovieDb.movies.getTopRated({}, successCB, errorCB);
	}
	
	function showUpcoming(){
		theMovieDb.movies.getUpcoming({}, successCB, errorCB);
	}
	
	function showPopular(){
		theMovieDb.movies.getPopular({}, successCB, errorCB);
	}
	
	// success Callback. 
	// renders the movies that were found
	function successCB(data) {
		movies = JSON.parse(data);
		app.f7.hideIndicator();
		IndexView.render({ model: movies, bindings: bindings });
	};
	
	function errorCB(data) {
		alert("Whoops, try again later...");
		console.log("Error callback: " + data);
	};

	return {
		init: init
	};
});