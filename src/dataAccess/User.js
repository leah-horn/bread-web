import serverConfig from '../ServerConfig';

export const login = (user, password, remember) => {
  return new Promise((resolve, reject) => {
    const body = [];
    body.push(encodeURIComponent("remember-me") + "=" + encodeURIComponent(remember))
    fetch(serverConfig.loginUrl, {
      credentials: 'include',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'username': user,
        'password': password,
      },
      body: body.join("&"),
    })
      .then(response => {
        if (!response.ok) {
          reject(response);
        }
        resolve();
      }).catch(reject);
  });
};

export const logout = () => {
  const request = new Request(serverConfig.loginUrl, {
    method: 'POST',
  });
  return request.blob();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const body = [];
    fetch(serverConfig.loginUrl, {
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    })
      .then(response => {
        if (!response.ok) {
          reject(response);
        }
        resolve(response);
      }).catch(reject);
  });
};