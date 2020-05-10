import serverConfig from '../ServerConfig';

export const login = (user, password, remember) => {
  const request = new Request(serverConfig.loginUrl, {
    method: 'POST',
    headers: {
      username: user,
      password,
    },
    body: {
      'remember-me': remember,
    },
  });
  return request.json();
};

export const logout = () => {
  const request = new Request(serverConfig.loginUrl, {
    method: 'POST',
  });
  return request.json();
};
