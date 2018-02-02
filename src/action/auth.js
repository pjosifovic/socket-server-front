import superagent from 'superagent';

import { cookieDelete } from '../lib/cookie';

const COOKIE = 'Socket-Token';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookieDelete(COOKIE);
  return removeTokenAction();
};

export const signupAction = (user) => (store) =>
  superagent.post(`${API_URL}/signup`)
    .send(user)
    .withCredentials()
    .then(({ text }) => 
      store.dispatch(setTokenAction(text))
    )
    .catch(console.log);

export const loginAction = (user) => (store) => 
  superagent.post(`${API_URL}/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(({ text }) =>
      store.dispatch(setTokenAction(text))
    )
    .catch(console.log);
