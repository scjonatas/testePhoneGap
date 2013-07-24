// Query the database
function getServicos(tx) {
	tx.executeSql('SELECT * FROM teste', [], onGetServicosSuccess, onError);
}

function getServicos() {
	$('#list li').remove();
	employees = data.items;
	$.each(employees, function(index, employee) {
		$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
				'<img src="pics/' + employee.picture + '"/>' +
				'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
				'<p>' + employee.title + '</p>' +
				'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		$('#employeeList').listview('refresh');
	});
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