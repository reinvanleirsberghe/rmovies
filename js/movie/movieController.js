define(["app","js/movie/movieView"], function(app, MovieView) {
	
	var $ = Framework7.$;
	var movie = null;
	var trailers = null;
	
	var bindings = [{
		element: '.open-movie-share',
		event: 'click',
		handler: movieShare
	}];
	
	function init(query){
		app.f7.showIndicator();
		
		if (query && query.id) {
			getMovieById(query.id);
		}
	}
	
	function getMovieById(id){
		theMovieDb.movies.getById({"id":id }, successMovie, errorCB);
	}
	
	// success callback loading movie
	function successMovie(data) {
		movie = JSON.parse(data);	
		theMovieDb.movies.getTrailers({"id":movie.id}, successTrailer, errorCB);
	};
	
	// succes callback loading trailers 
	// render
	function successTrailer(data) {
		trailers = JSON.parse(data);
		theMovieDb.movies.getCredits({"id":movie.id}, successCredit, errorCB);
	};
	
	function successCredit(data){
		credits = JSON.parse(data);
		app.f7.hideIndicator();
		MovieView.render({ 
			model: movie, 
			trailers: trailers,
			credits: credits,
			bindings: bindings
		});	
	}
	
	function errorCB(data) {
		alert("Whoops, try again later...");
		console.log("Error callback: " + data);
	};
	
	function movieShare(){
	    var buttons1 = [
	        {
	            text: 'Social share',
	            label: true
	        },
	        {
	            text: 'Facebook',
	            onClick: function () {
	                window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.imdb.com/title/'+$("#movie-imdb").val()+'/', '_system');
	            }
	        },
	        {
	            text: 'Twitter',
	            onClick: function () {
	                window.open('http://twitter.com/share?url=http://www.imdb.com/title/'+$("#movie-imdb").val()+'/', '_system');
	            }
	        }
	    ];
	    var buttons2 = [
	        {
	            text: 'Cancel',
	            red: true
	        }
	    ];
	    var groups = [buttons1, buttons2];
		app.f7.actions(groups);
	};
	
	return {
		init: init
	};
});