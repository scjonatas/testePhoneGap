// Query the database
function getServicos(tx) {
	tx.executeSql('SELECT * FROM teste', [], onGetServicosSuccess, onError);
}

function onGetServicosSuccess(tx, results) {
	$('#list li').remove();
	
	for (var i = 0; i < results.rows.length; i++) {
		$('#list').append('<li>' + results.rows.item(i).data + '</li>');
		$('#list').listview('refresh');
	}
}

// Evento acionado após efeito de transição
$(document).delegate("#page2", "pageshow", function() {
	alert('A page with an id of "page2" was just created by jQuery Mobile!');
});

$("#page2").bind("pageinit", function() {
	db.transaction(getServicos, onError);
});