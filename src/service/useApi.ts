import axios, { AxiosRequestConfig } from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const useApi = () => {
  const { token, updateToken } = useContext(UserContext);
  const instance = axios.create({
    baseURL: "https://localhost:44324",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  });

  instance.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const { response } = err;
      if (response.url !== "/login" && err.response) {
        if (err.response.status === 401 && !response._retry) {
          response._retry = true;

          try {
            const rs = await instance.post("/refresh-token");

            const { jwtToken } = rs.data;
            updateToken(jwtToken);

            return instance(response);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );

  return instance;
}

export default useApi;