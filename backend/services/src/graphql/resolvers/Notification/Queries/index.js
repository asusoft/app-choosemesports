import { getNotificationsQueryResolver } from "./get-notifications.js";
import { retrieveNotificationQueryResolver } from "./retrieve-notification.js";

export const NotificationQueriesResolvers = {
   retrieveNotification: retrieveNotificationQueryResolver,
   getNotifications: getNotificationsQueryResolver
};
