var db;
var dbCreated = false;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Populate the database
function populateDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS teste');
	tx.executeSql('CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, data VARCHAR(50))');
	tx.executeSql('INSERT INTO teste (id, data) VALUES (NULL, "First row")');
	tx.executeSql('INSERT INTO teste (id, data) VALUES (NULL, "Second row")');
}

// Query the database
function queryDB(tx) {
	tx.executeSql('SELECT * FROM teste', [], querySuccess, errorCB);
}

// Query the success callback
function querySuccess(tx, results) {
	var len = results.rows.length;
	alert("teste table: " + len + " rows found.");
	for (var i = 0; i < len; i++) {
		alert("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
	}
}

// Transaction error callback
function errorCB(err) {
	alert("Error processing SQL: " + err.code);
	alert(err.message);
}

// Transaction success callback
function successCB() {
	db.transaction(queryDB, errorCB);
}

// device APIs are available
function onDeviceReady() {
	db = window.openDatabase("database", "1.0", "Banco de Teste", 200000);
	
	if (dbCreated) {
		alert("Buscando dados!");
		db.transaction(queryDB, errorCB);
	}
	else {
		alert("Inserindo dados no banco");
		db.transaction(populateDB, errorCB, successCB);
	}
}