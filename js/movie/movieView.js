define(['hbs!js/movie/movie'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		console.log(params.model);
		console.log(params.trailers);
		console.log(params.credits);
		$('.movie-page').html(template({ movie: params.model, trailer: params.trailers.youtube, credits: params.credits }));
		bindEvents(params.bindings);
	}
	
	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	};
});