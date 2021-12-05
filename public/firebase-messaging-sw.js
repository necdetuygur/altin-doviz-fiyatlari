importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBZDLFIAE_4zARy_UTZpYR2LKvMdrU46Xw",
    authDomain: "fcm1-f0a24.firebaseapp.com",
    databaseURL: "https://fcm1-f0a24.firebaseio.com",
    projectId: "fcm1-f0a24",
    storageBucket: "fcm1-f0a24.appspot.com",
    messagingSenderId: "411358737390",
    appId: "1:411358737390:web:cbdb696be01b1ebb9d14ff"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body,
        icon: payload.data.icon,
        tag: payload.data.tag,
        data: payload.data.link
    });
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(self.clients.openWindow(event.notification.data));
});
