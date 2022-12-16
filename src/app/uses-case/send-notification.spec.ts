import { InMemoryNotificationRepository } from '../../../test/repositories/in-memorie-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const NotificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(NotificationRepository);

    await sendNotification.execute({
      content: 'example-content',
      category: 'example-category',
      recipientId: 'example-recipient-id',
    });

    expect(NotificationRepository.notifications).toHaveLength(1);
  });
});
