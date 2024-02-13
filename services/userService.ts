import { API_URL, USER_API_URL } from "@/helpers/consts";
import { IProfile } from "@/types/IProfile";
import { IUser } from "@/types/User";

const userEndpoints = {
  info: USER_API_URL,
  getAllUsers: `${API_URL}/users`,
  getUser: (id: string) => `${API_URL}/users/${id}`
};

const userService = {
  getInfo: async (): Promise<IProfile | undefined> => {
    const response = await fetch(userEndpoints.info);

    if (!response.ok) return undefined

    const json = await response.json();

    return json.results[0];
  },

  getAllUsers: async (): Promise<IUser[]> => {
    const response = await fetch(userEndpoints.getAllUsers);
    const json = await response.json();

    if (!response.ok) return []

    return json;
  },

  getUser: async (id: string): Promise<IUser | undefined> => {
    const response = await fetch(userEndpoints.getUser(id));

    if (!response.ok) return undefined

    const user = await response.json() as IUser;

    return user;
  },
};

export default userService;
