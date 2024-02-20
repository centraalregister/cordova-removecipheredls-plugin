# OutSystems Remove Secure Ciphered Local Storage Plugin

Cordova plugin that recreates a SQLLite database after removing the reference to Secure Ciphere Storgae Plugin for easy usage within OutSystems Platform native mobile apps, This operation is deletes all data of the database, but App is still working you have to create logic in the OnApplicationReady of your App to Initial load the user data (for example by DeviceId).

# Supported platforms

- Android
- iOS
