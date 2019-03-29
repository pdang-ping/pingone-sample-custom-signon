const common = {
  branding: {
    logo: require('./logo-pingidentity.png')
  },
  // Application authorization details. For more information check "Getting Started" in README.md
  authDetails: {
    environmentId: "<environmentId>",
    responseType: "<responseType>",
    clientId: "<clientId>",
    clientSecret: "<clientSecret>",
    grantType: "<grantType>",
    redirectUri: "http://localhost:3000/callback",
    logoutRedirectUri: "http://localhost:3000",
    scope: "profile address email phone",
    prompt: "login",
    tokenEndpointAuthMethod: "client_secret_post",
    maxAge: 3600
  },
};

const stg = {
  AUTH: 'https://auth-staging.pingone.com',
  API: 'https://api-staging.pingone.com/v1/environments'
};

const prod = {
  AUTH: 'https://auth.pingone.com',
  API: 'https://api.pingone.com/v1/environments'
};

// Default to prod if not set
let config = prod;
if (process.env.REACT_APP_STAGE === 'stg') {
  config = stg;
}

export default {
  // Add common config values here
  ...common,
  ...config
};
