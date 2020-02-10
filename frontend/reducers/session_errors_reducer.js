import { RECEIVE_CURRENT_MEMBER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_MEMBER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;