import { AppRootState } from './app.state';

export const getMessages = (state: AppRootState) => state.messages;

export const getUser = (state: AppRootState) => state.user;
