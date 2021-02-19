import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
PushNotification.configure({
    smallIcon: 'ic_notification',
      largeIcon: 'icon',
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  popInitialNotification: true,
    requestPermissions: true
  });

  export const LocalNotification = (data) => {
    PushNotification.localNotification({
      autoCancel: true,
      //smallIcon: 'ic_notification',
      //largeIcon: 'ic_notification',
      icon: 'ic_notification',
      bigPictureUrl: data.image,
      bigText: data.body,
      subText: data.body,
      title: data.title,
      message: data.body,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]'
    })
  }

  // export const LocaliOSNotification = () => {
  //   PushNotificationIOS.presentLocalNotification({
  //     alertBody:
  //       'This is local notification demo in React Native app. Only shown, when expanded.',
  //     alertTitle: 'Local Notification Title',
  //     isSilent: true,
  //     category: "", //optional
  //     userInfo: "", //optional
  
  //     message: 'Expand me to see more',
  //     vibrate: true,
  //     vibration: 300,
  //     playSound: true,
  //     soundName: 'default',
  //     actions: '["Yes", "No"]'
  //   })
  // }
  