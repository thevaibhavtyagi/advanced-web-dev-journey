import { EventEmitter } from 'events';

class NotificationService extends EventEmitter {

    send(userId, type, message) {
        this.emit("notification:sent", {
            userId,
            type,
            message
        });
    }

     markAsRead(userId, notifId) {
        this.emit("notification:read", {
            userId,
            notifId,
        });
    }

    clear(userId) {
        this.emit("notification:cleared", {
            userId,
        });
    }
}

const notificationService = new NotificationService();

//listeners
notificationService.on("notification:sent", ({userId, message}) => {
    console.log(`[EMAIL] Sending to user #${userId}: ${message}`);
});

notificationService.on("notification:sent", () => {
    console.log(`[DB] Saving notification to database...`);
});

notificationService.on("notification:read", ({notifId}) => {
    console.log(`[DB] Marked notification ${notifId} as read`);
});

notificationService.on("notification:cleared", ({userId}) => {
    console.log(`[DB] Cleared all notifications for user ${userId}`);
});

//testing
notificationService.send(1, "email", "Welcome broooo!!");
notificationService.markAsRead(1, 1);
notificationService.clear(1);