const httpConfig = {
  development: {
    baseUrl: "http://localhost:3000/",
  },
  production: {
    baseUrl: "http://example.com/",
  },
};
export default httpConfig[process.env.NODE_ENV];
