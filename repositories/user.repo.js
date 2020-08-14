import userModel from "../models/user.model";

export const getUserByUsername = async (username) => {
  //const user = await userModel.findOne({ username: username });
  const user = { success: true };
  return user;
};

export const doCreateNewUser = (newUser) => {
  const result = { success: true, data: { name: "tung" } };
  return result;
};
