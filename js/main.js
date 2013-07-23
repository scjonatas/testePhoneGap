var jqmReady = $.Deferred();
var pgReady = $.Deferred();

// jqm ready
$(document).bind("mobileinit", jqmReady.resolve);

// phonegap ready
document.addEventListener("deviceready", pgReady.resolve, false);

// all ready :)
$.when(jqmReady, pgReady).then(function() {
	$.mobile.defaultPageTransition = "slidefade";
	$("#content").html("Hello, World! Demo  JQuery Mobile com PhoneGap 2!");
});