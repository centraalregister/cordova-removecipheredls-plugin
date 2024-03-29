// Variable to check whether the database is deleted
var now = new Date();
var past = new Date();

now.setTime(now.getTime() + 1 * 3600 * 1000);
past.setTime(past.getTime() - 1 * 3600 * 1000);
// Override existing openDatabase to delete and recreate it on Error
var originalOpenDatabase = window.sqlitePlugin.openDatabase;

// First remove old cookie
document.cookie = "NewDatabaseIsCreated=; expires=" + past.toUTCString() + "; path=/";
console.log('Open database');
window.sqlitePlugin.openDatabase = function(options, successCallback, errorCallback) {
    var newOptions = {};
    for (var prop in options) {
	if (options.hasOwnProperty(prop)) {
	    newOptions[prop] = options[prop];
	}
    }
    console.log('Database name: ' + newOptions.name);    
    // Ensure `location` is set (it is mandatory now)
    if (newOptions.location === undefined) {
	newOptions.location = 'default';
    }
    
    // Set the `key` to empty
    newOptions.key = null;

    // Validate the options and call the original openDatabase
    return originalOpenDatabase.call(window.sqlitePlugin, newOptions, successCallback, function() {
	    console.log('Delete database');
	    sqlitePlugin.deleteDatabase(newOptions, function() {
		    console.log('Reopen database');
		    window.sqlitePlugin.openDatabase(newOptions, successCallback, errorCallback);
		    document.cookie = "NewDatabaseIsCreated=1; expires=" + now.toUTCString() + "; path=/";
	    }, function() {
		    errorCallback();
	    });
    });
};
