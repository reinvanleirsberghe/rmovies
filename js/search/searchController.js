define(["js/search/searchView"], function(SearchView) {
	var $ = Framework7.$;
	
	var bindings = [/*{
		element: '.popup',
		event: 'open',
		handler: popupOpen
	}*/];

	function init() {
		//searchMovie();
	}
	
	function searchMovie(search){
		 $('.popup .preloader-search').show();
		 searchTimeout = setTimeout(function () {
		 	 theMovieDb.search.getMovie({"query":search}, successSearch, errorCB)
	    }, 300);
	}
	
	function successSearch(data) {
		results = JSON.parse(data);
		$('.popup .preloader-search').hide();
		SearchView.render({ 
			model: results, 
			bindings: bindings
		});	
	};
	
		
	function errorCB(data) {
		$('.popup .preloader-search').hide();
		console.log("Error callback: " + data);
	};
	
	$('.popup input[type="text"]').on('keyup', function(){
		searchMovie(this.value);
	});
	
	$('.popup').on('open', function () {
	    $('.views').addClass('blured');
	    $('.statusbar-overlay').addClass('with-popup-opened');
	});
	
	$('.popup').on('opened', function () {
	    $('.popup input[type="text"]')[0].focus();
	});
	
	$('.popup').on('closed', function () {
	    $('.popup input[type="text"]').val('');
	    $('.popup .search-results').html('');
	    $('.popup .preloader-search').hide();
	});
	
	$('.popup').on('close', function () {
	    $('.views').removeClass('blured');
	    $('.popup input[type="text"]')[0].blur();
	    $('.statusbar-overlay').removeClass('with-popup-opened');
	});

	return {
		init: init
	};
});