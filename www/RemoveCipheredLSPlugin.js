// Variable to check whether the database is deleted
var now = new Date();
var past = new Date();

now.setTime(now.getTime() + 1 * 3600 * 1000);
now.setTime(now.getTime() - 1 * 3600 * 1000);
// Override existing openDatabase to delete and recreate it on Error
var originalOpenDatabase = window.sqlitePlugin.openDatabase;

// First remove old cookie
document.cookie = "NewDatabaseIsCreated=; expires=" + past.toUTCString() + "; path=/";

window.sqlitePlugin.openDatabase = function(options, successCallback, errorCallback) {
    return originalOpenDatabase.call(window.sqlitePlugin, options, successCallback, function() {
	    sqlitePlugin.deleteDatabase(options, function() {
		    window.sqlitePlugin.openDatabase(options, successCallback, errorCallback);
		    document.cookie = "NewDatabaseIsCreated=1; expires=" + now.toUTCString() + "; path=/";
	    }, function() {
		    errorCallback();
	    });
    });
};
