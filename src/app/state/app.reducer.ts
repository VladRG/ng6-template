import { AppActions, AppActionTypes } from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  messages: [],
  user: null
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload
      };
    case AppActionTypes.ShowFlashMessage:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case AppActionTypes.ClearFlashMessage:
      return {
        ...state,
        messages: state.messages.filter(message => message !== action.payload)
      };
    default:
      return state;
  }
}
