const serverBaseUrl = 'https://localhost:8443/bread-war-1.0-SNAPSHOT';
const apiUrl = `${serverBaseUrl}/api`;
export default {
  healthUrl: `${serverBaseUrl}/meta/health`,
  loginUrl: `${apiUrl}/user/login`,
  logoutUrl: `${apiUrl}/user/logout`,
  userInfoUrl: `${apiUrl}/user`,
  recipeUrl: `${apiUrl}/recipe`,
};
