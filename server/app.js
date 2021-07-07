const webPush = require("web-push");

function generateVAPIDKeys() {
    const vapidKeys = webPush.generateVAPIDKeys();

    return {
        publicKey: vapidKeys.publicKey,
        privateKey: vapidKeys.privateKey,
    };
}

var pushSubscription = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/dP4z3tpEOFM:APA91bHlJTCbKGkXEuYE5bm3ABuRbN3tUsNn2f7etEONiJwhaxT3kxTFi68Fd8OuG3CiFF19LW3jOZRi-5lytfJiWZfaHBlQ3E9GSjBNSvYcc6DoUJPbDMgMwtLLWp6MUpVwFUr4h4PI",
    keys: { p256dh: "BPHM8lSvu8DbxrZeuIp7cHHalnjDOXY1LCMtut9AcleyaoFHTDWlHx1-5DQKSCTFhXcA8YzLlxlThMH6hBN9ekc", auth: "DcFzN5E7s26ILESHTCv9Bw" },
};

var vapidPublicKey = "BNBDYHVcFhemz7soRcSURcNPlTTuaj2QPshQyKrlKnI9mrBCc2xbsJ3_EYQVKIBXjfZGcZw44HtrEF9oLr7qcEY";
var vapidPrivateKey = "a-RdJ0oif8-qhDk8cFht8W9R0Dn5rTytRh2VEb-txlQ";

var payload = "Here is a payload!";

var options = {
    gcmAPIKey: "955473076265",
    vapidDetails: {
        subject: "mailto:info@avelab.ru",
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey,
    },
    TTL: 60,
};

setInterval(() => {
    webPush.sendNotification(pushSubscription, payload, options).then((e) => console.log(e));
    console.log("tick");
}, 5000);

// console.log(generateVAPIDKeys());
