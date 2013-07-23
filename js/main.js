var db;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// Populate the database
function populateDb(tx) {
//	tx.executeSql('DROP TABLE IF EXISTS teste');
	tx.executeSql('CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, data VARCHAR(50))');
	tx.executeSql('INSERT INTO teste (id, data) VALUES (NULL, "First row")');
	tx.executeSql('INSERT INTO teste (id, data) VALUES (NULL, "Second row")');
}

// Query the database
function queryDb(tx) {
	tx.executeSql('SELECT * FROM teste', [], querySuccess, error);
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
function error(err) {
	alert("Error processing SQL: " + err.code);
	alert(err.message);
}

// Transaction success callback
function dbCreated() {
	window.localStorage.setItem("dbCreated", "1");
	db.transaction(queryDb, error);
}

// device APIs are available
function onDeviceReady() {
	$.mobile.defaultPageTransition = "pop";

	db = window.openDatabase("database", "1.0", "Banco de Teste", 200000);
	
	alert("key0: " + window.localStorage.key(0));
	var dbCreated = window.localStorage.getItem("dbCreated");
	if (dbCreated) {
		alert("Buscando dados!");
		db.transaction(queryDb, error);
	}
	else {
		alert("Inserindo dados no banco");
		db.transaction(populateDb, error, dbCreated);
	}
}