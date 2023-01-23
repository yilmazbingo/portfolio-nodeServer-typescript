import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import { Request, Response, NextFunction } from "express";

// Authentication middleware
// This middleware will check access token in authorization headers of a request
// It will verify access token against Auth0 JSON web key set

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    // this link is always provided by auth0 providers
    jwksUri: process.env.JWKS_URI as string,
  }),
  //   this is in the API/identifier in auth0.com
  audience: process.env.AUTH0_AUDIENCE,
  //   issuer should end with "/"
  issuer: process.env.ISSUER,
  algorithms: ["RS256"],
});

// next();
