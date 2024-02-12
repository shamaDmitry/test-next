import { USER_API_URL } from "@/helpers/consts";

const userEndpoints = {
  info: USER_API_URL,
};

const userService = {
  getInfo: async () => {
    try {
      const response = await fetch(userEndpoints.info);
      const json = await response.json();

      return json.results;
    } catch (err) {
      console.log(err);

      // return { err };
    }
  },
};

export default userService;
