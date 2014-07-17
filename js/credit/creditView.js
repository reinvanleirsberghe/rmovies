define(['hbs!js/credit/credit'], function(template) {
	var $ = Framework7.$;

	function render(params) {
		console.log(params.credits);
		$('.credit-page').html(template());
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