cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
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
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-firebasex": "12.1.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "onesignal-cordova-plugin": "3.0.0-beta1"
  };
});