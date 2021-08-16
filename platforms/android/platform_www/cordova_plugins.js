cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.NotificationReceived",
      "file": "plugins/onesignal-cordova-plugin/www/NotificationReceived.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.NotificationOpened",
      "file": "plugins/onesignal-cordova-plugin/www/NotificationOpened.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.InAppMessage",
      "file": "plugins/onesignal-cordova-plugin/www/InAppMessage.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.Subscription",
      "file": "plugins/onesignal-cordova-plugin/www/Subscription.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "cordova-plugin-ios-decimal-keyboard.decimalKeyboard",
      "file": "plugins/cordova-plugin-ios-decimal-keyboard/www/decimal-keyboard.js",
      "pluginId": "cordova-plugin-ios-decimal-keyboard",
      "clobbers": [
        "window.DecimalKeyboard"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "onesignal-cordova-plugin": "3.0.0-beta1",
    "cordova-plugin-ios-decimal-keyboard": "1.0.1",
    "cordova-plugin-firebasex": "13.0.1"
  };
});