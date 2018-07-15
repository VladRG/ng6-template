import { AppState } from './app.state';

export const getMessages = (state: AppState) => state.messages;

export const getUser = (state: AppState) => state.user;
