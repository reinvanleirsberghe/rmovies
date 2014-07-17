define(['hbs!js/index/movie-list-item'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		console.log(params.model);
		$('.main-content').html(template(params.model));
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