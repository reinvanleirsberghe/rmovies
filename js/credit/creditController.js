define(["app","js/credit/creditView"], function(app, CreditView) {
	
	var $ = Framework7.$;
	var movie = null;
	var trailers = null;
	
	var bindings = [/*{
		element: '.open-movie-share',
		event: 'click',
		handler: movieShare
	}*/];
	
	function init(query){
		if (query && query.id) {
			getCreditById(query.id);
		}
	}
	
	function getCreditById(id){
		theMovieDb.credits.getCredit({"id": id}, successCredit, errorCB)
	}
	
	function successCredit(data){
		credits = JSON.parse(data);
		CreditView.render({ 
			credits: credits
		});	
	}
	
	function errorCB(data) {
		alert("Whoops, try again later...");
		console.log("Error callback: " + data);
	};
		
	return {
		init: init
	};
});