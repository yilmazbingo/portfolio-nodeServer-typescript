import request, { Response } from "request";

// auth0 will validate the tokens. in order to read the users, in auth0, in API TAB/machine-to-machine-applications allow "read:users".
// this is a big object. so specifiy name,picture,user-id
export const getAuth0User = (accessToken: string) => (userId: string) => {
  const options = {
    method: "GET",
    url: `${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}?fields=name,picture,user_id`,
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  return new Promise((resolve, reject) => {
    request(options, (error: Error, res: Response, body) => {
      if (error) {
        return reject(new Error(error.message));
      }

      resolve(body ? JSON.parse(body) : "");
    });
  });
};
