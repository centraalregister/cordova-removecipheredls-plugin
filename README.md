# OutSystems Remove Secure Ciphered Local Storage Plugin

Cordova plugin that recreates a SQLLite database after removing the reference to Secure Ciphered Storgae Plugin for easy usage within OutSystems Platform native mobile apps.
see: 

>[!WARNING]
>This operation deletes the database including all data, database entities will be recreated and AppVersion will be initialized by OutSystems VersionManager. App is still working you have to create logic in the OnApplicationReady of your App to Initial load the user data (for example by DeviceId).

# Supported platforms

- Android
- iOS

# LICENSE
[The MIT Licence (MIT)](https://opensource.org/license/mit/).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
