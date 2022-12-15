import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = []	;

const NotificationRepository = {
    async create(notification: Notification) {
      notifications.push(notification);
    },
  }

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(NotificationRepository);

        const { notification } = await sendNotification.execute({
            content: 'example-content',
            category: 'example-category',
            recipientId: 'example-recipient-id',
        });

        expect(notification).toBeTruthy();
    });
})