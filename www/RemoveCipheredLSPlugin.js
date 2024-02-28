// Variable to check whether the database is deleted
var now = new Date();
now.setTime(now.getTime() + 1 * 3600 * 1000);
// Override existing openDatabase to delete and recreate it on Error
var originalOpenDatabase = window.sqlitePlugin.openDatabase;
document.cookie = "NewDatabaseIsCreated=A; expires=" + now.toUTCString() + "; path=/";
window.sqlitePlugin.openDatabase = function(options, successCallback, errorCallback) {
    document.cookie = "NewDatabaseIsCreated=B; expires=" + now.toUTCString() + "; path=/";
    return originalOpenDatabase.call(window.sqlitePlugin, options, successCallback, function() {
	    document.cookie = "NewDatabaseIsCreated=C; expires=" + now.toUTCString() + "; path=/";
	    sqlitePlugin.deleteDatabase(options, function() {
		    document.cookie = "NewDatabaseIsCreated=D; expires=" + now.toUTCString() + "; path=/";
		    window.sqlitePlugin.openDatabase(options, successCallback, errorCallback);
		    document.cookie = "NewDatabaseIsCreated=1; expires=" + now.toUTCString() + "; path=/";
	    }, function() {
		    document.cookie = "NewDatabaseIsCreated=E; expires=" + now.toUTCString() + "; path=/";
		    errorCallback();
	    });
    });
};
