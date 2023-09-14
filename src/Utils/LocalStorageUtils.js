// Utility function to store users in LocalStorage
export const saveUsersToLocalStorage = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Utility function to retrieve users from LocalStorage
export const getUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
};
