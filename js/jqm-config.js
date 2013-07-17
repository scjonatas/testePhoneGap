$(document).bind("mobileinit", function() {
	$.mobile.defaultPageTransition = "slidefade";
}); 

function login() {
    showWebPage('http://localhost/openid/index.php');
    // $.jsonp({
        // url: 'http://localhost/openid/index.php',
        // callbackParameter: 'callback',
        // success: function(data, status) {
            // //$('#your-tweets').append('<li>The feed loads fine');
            // $.each(data, function(i,item){
                // $('#error').append('Msg = ' + item.msg);
            // });
        // },
        // error: function(){
            // $('#error').append('There was an error loading the feed');
        // }
    // });
}
