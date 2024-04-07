module.exports.DATABASE_CONFIG = (serverless) => ({
  dev: {
    DB_URL: 'devUrl',
  },
  prod: {
    DB_URL: 'produrl',
  },
});
