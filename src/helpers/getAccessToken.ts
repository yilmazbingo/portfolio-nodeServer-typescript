import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ResponseData {
  access_token: string;
}

// make a request to get token, in Api tab of AUTHO , machine-to-machine applications, enable the authorized
export const getAccessToken = async (): Promise<ResponseData> => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: process.env.AUTH0_TOKEN_URL,
    headers: { "Content-type": "application/json" },
    // this form is specified by auth0
    data: {
      grant_type: "client_credentials",
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
    },
  };
  const res: AxiosResponse<ResponseData> = await axios(options);
  console.log("res.data for interface", res.data);
  return res.data;
};
