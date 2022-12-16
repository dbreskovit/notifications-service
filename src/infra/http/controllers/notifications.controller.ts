import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/uses-case/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';


@Controller('notifications')
export class NotificationsController {
  constructor(private semdNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {recipientId, content, category} = body;

    const { notification } = await this.semdNotification.execute({
      recipientId,
      content,
      category,
    });

    return {notification};
  }
}