import { IsNotEmpty } from 'class-validator';
import { IsUUID } from 'class-validator/types/decorator/decorators';

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;
}
