import { getUserByUsername, doCreateNewUser } from "../repositories/user.repo";

export const userServiceLogin = ({ username }) => {
  const result = getUserByUsername(username);

  if (result.success) {
    return {
      status: "single",
      message: "Exist",
    };
  }
  return {
    status: "marriaged",
    message: "adhashd",
  };
};

export const userServiceSignup = (newUser) => {
  const result = doCreateNewUser(newUser);
  if (result.success) {
    return {
      status: 200,
      data: result.data,
    };
  }
  return {
    status: 400,
  };
};
