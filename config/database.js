const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const isProduction = env("NODE_ENV") === "production";

  const connections = {
    postgres: {
      connection: {
        connectionString: isProduction
          ? env("DATABASE_URL") // Internal URL for production
          : env("DATABASE_LOCAL_URL"), // Public URL for local development
        ssl: isProduction &&
          env.bool("DATABASE_SSL", false) && {
            rejectUnauthorized: env.bool(
              "DATABASE_SSL_REJECT_UNAUTHORIZED",
              true
            ),
          },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
