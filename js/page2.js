// Evento acionado após efeito de transição
$(document).delegate("#page2", "pageshow", function() {
	alert('A page with an id of "page2" was just created by jQuery Mobile!');
});