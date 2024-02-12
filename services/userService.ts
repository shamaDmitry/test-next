import { API_URL, USER_API_URL } from "@/helpers/consts";

const userEndpoints = {
  info: USER_API_URL,
  getAllUsers: `${API_URL}/users`
};

const userService = {
  getInfo: async () => {
    try {
      const response = await fetch(userEndpoints.info);
      const json = await response.json();

      return json.results;
    } catch (err) {
      console.log(err);
    }
  },

  getAllUsers: async () => {
    try {
      const response = await fetch(userEndpoints.getAllUsers);
      const json = await response.json();

      return json;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userService;
