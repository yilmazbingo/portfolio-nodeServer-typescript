export const DB_URI =
  process.env.NODE_ENV === "development"
    ? process.env.DB_URI
    : process.env.DB_PROD_URI;
