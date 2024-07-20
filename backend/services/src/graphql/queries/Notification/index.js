export const NotificationQuery = `
    type Query {
        getNotifications(skip: Int! = 0, limit: Int! = 20): NotificationListOrBE!
        retrieveNotification(id: String!): NotificationOrBE
    }
`;