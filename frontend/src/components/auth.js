export const authUser = JSON.parse(localStorage.getItem("token"));

export const saveUser = (user) => {
  localStorage.setItem("token", JSON.stringify(user));
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  const token = user.data.token;
  return token;
};

export const loggedIn = () => {
  if (localStorage.getItem("token") === null) {
    return false;
  } else {
    return true;
  }
};

export const adminAuth = () => {
  const adminRole = localStorage.getItem("token.jobrole");
  console.log(adminRole);
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const signedInUser = () => {
  const userId = authUser.data.id;
  console.log(userId);
  return userId;
};
