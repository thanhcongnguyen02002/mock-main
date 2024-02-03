import instance from "./axiosClient";
const addUsers = (payload: {
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  cccd: number;
  address: string;
  phonenumer: number;
  bankingnumber: number;
  username: string;
  password: string;
}) => {
  return instance.post("api/v1/auth/register", payload);
};
const login = (username: string, password: string) => {
  return instance.post(
    "api/v1/auth/login-v2",
    {},
    {
      params: {
        username,
        password,
      },
    }
  );
};
export { addUsers, login };
