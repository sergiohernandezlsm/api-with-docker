const environments = ["development", "staging", "production", "test"];

module.exports = environments.reduce((result, value) => {
  return Object.assign({}, result, {
    [value]: {
      username: "sergio",
      password: "password123",
      database: "database",
      host: "127.0.0.1",
      port: "3308",
      dialect: "mysql",
    },
  });
}, {});
