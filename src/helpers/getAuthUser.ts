import request, { Response } from "request";

// auth0 will validate the tokens. in order to read the users, in auth0, in API TAB/machine-to-machine-applications allow "read:users".
// this is a big object. so specifiy name,picture,user-id

interface UserInfo {
  name: string;
  nickname: string;
  user_id: string;
  picture: string;
}
export const getAuth0User = (accessToken: string) => (
  userId: string
): Promise<UserInfo> => {
  const options = {
    method: "GET",
    url: `${process.env.ISSUER}api/v2/users/${userId}?fields=name,picture,user_id,nickname`,
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
