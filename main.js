if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(function (reg) {
            console.log("Service Worker Registered!", reg);

            reg.pushManager.getSubscription().then(function (sub) {
                // if (sub === null) {
                if (sub === null) {
                    // Update UI to ask user to register for Push
                    console.log("Not subscribed to push service!");

                    // Notification.requestPermission(function (status) {
                    //     console.log("Notification permission status:", status);
                    // });

                    reg.pushManager
                        .subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: "BNBDYHVcFhemz7soRcSURcNPlTTuaj2QPshQyKrlKnI9mrBCc2xbsJ3_EYQVKIBXjfZGcZw44HtrEF9oLr7qcEY",
                        })
                        .then(function (sub) {
                            console.log("Endpoint URL: ", sub);
                        })
                        .catch(function (e) {
                            if (Notification.permission === "denied") {
                                console.warn("Permission for notifications was denied");
                            } else {
                                console.error("Unable to subscribe to push", e);
                            }
                        });
                } else {
                    // We have a subscription, update the database
                    console.log("Subscription object: ", sub.toJSON(), sub.getKey("p256dh"));
                }
            });
        })
        .catch(function (err) {
            console.log("Service Worker registration failed: ", err);
        });
}
