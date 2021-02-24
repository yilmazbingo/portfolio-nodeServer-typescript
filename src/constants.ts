export const DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_PROD_URI
    : process.env.DB_URI;
