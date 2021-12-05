var PUBLICKEY = "BHlbavRd70g9bRf3AhwgYngMsH9USA8SrtfZJNZIqgr__rce1Y1ccdcpw7fvj8X72euaqdsAwlIIf0vh6guaIQQ";
var AUTHKEY = "AAAAX8bkM-4:APA91bFjL2mYl0BQZCrvNdPtFMaMFz03GtKnT_sli-CP9EpcgFEGWTnDRaUPAnVa8zxRIzf_XBB7gH_whZ1vnWcbdPhQPsy1NuHNsNc3yoSawlQqqnp5r_E9a50MkrnqQpioyJzBeooS";
var TOPIC = "altin";
var APIKEY = "AIzaSyBZDLFIAE_4zARy_UTZpYR2LKvMdrU46Xw";

var firebaseConfig = {
    apiKey: APIKEY,
    authDomain: "fcm1-f0a24.firebaseapp.com",
    databaseURL: "https://fcm1-f0a24.firebaseio.com",
    projectId: "fcm1-f0a24",
    storageBucket: "fcm1-f0a24.appspot.com",
    messagingSenderId: "411358737390",
    appId: "1:411358737390:web:cbdb696be01b1ebb9d14ff"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey(PUBLICKEY);

messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
        subscribeTokenToTopic(refreshedToken, TOPIC);
    }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
    });
});

messaging.getToken().then((currentToken) => {
    if (currentToken) {
        subscribeTokenToTopic(currentToken, TOPIC);
    } else {
        console.log('No Instance ID token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            /* console.log('Notification permission granted.'); */
        } else {
            console.log('Unable to Get permission to notify.');
        }
    });
}

function subscribeTokenToTopic(token, topic) {
    fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
        method: 'POST',
        headers: new Headers({
            'Authorization': "key=" + AUTHKEY,
        })
    }).then(response => {
        if (response.status < 200 || response.status >= 400) {
            throw 'subscribeTokenToTopic: ERR: ' + response.status + ' - ' + response.text();
        }
        /* console.log('subscribeTokenToTopic: OK'); */
    }).catch(error => {
        console.error(error);
    })
}

window.addEventListener("load", requestPermission);