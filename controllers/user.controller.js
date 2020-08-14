import { userServiceLogin, userServiceSignup } from "../services/user.service";

const userLogin = (req, res) => {
  const { username } = req.body;
  const response = userServiceLogin(username);
  res.json(response);
};

const userSignup = (req, res) => {
  const newUser = req.body;
  const response = userServiceSignup(newUser);
  res.json(response);
};

export const userController = {
  userLogin,
  userSignup,
};
