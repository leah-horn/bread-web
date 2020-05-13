import serverConfig from '../ServerConfig';

export const login = (user, password, remember) => new Promise((resolve, reject) => {
  const body = [];
  body.push(`${encodeURIComponent('remember-me')}=${encodeURIComponent(remember)}`);
  fetch(serverConfig.loginUrl, {
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      username: user,
      password,
    },
    body: body.join('&'),
  })
    .then((response) => {
      if (!response.ok) {
        reject(response);
      }
      resolve();
    }).catch(reject);
});

export const logout = () => new Promise((resolve, reject) => {
  fetch(serverConfig.logoutUrl, {
    credentials: 'include ',
    method: 'POST',
    mode: 'cors',
  }).then((response) => {
    if (!response.ok) {
      reject(response.statusText);
    }
    resolve();
  });
});

export const getCurrentUser = () => new Promise((resolve, reject) => {
  fetch(serverConfig.loginUrl, {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => {
      if (!response.ok) {
        reject(response);
      }
      resolve(response);
    }).catch(reject);
});
