import { FlashMessage, User } from '@app/models';

export interface AppState {
  messages: Array<FlashMessage>;
  user: User;
}
