import { API_URL, USER_API_URL } from "@/helpers/consts";
import { IProfile } from "@/types/IProfile";
import { IUser } from "@/types/IUser";
import { notFound } from 'next/navigation';

const userEndpoints = {
  info: USER_API_URL,
  getAllUsers: `${API_URL}/users`,
  getUser: (id: string) => `${API_URL}/users/${id}`
};

const userService = {
  getInfo: async (): Promise<IProfile[]> => {
    const response = await fetch(userEndpoints.info);

    if (!response.ok) {
      notFound();
    }

    const json = await response.json();

    return json.results;
  },

  getAllUsers: async (): Promise<IUser[]> => {
    try {
      const response = await fetch(userEndpoints.getAllUsers);
      const json = await response.json();

      return json;
    } catch (err) {
      return []
    }
  },

  getUser: async (id: string): Promise<IUser | undefined> => {
    const response = await fetch(userEndpoints.getUser(id));

    if (!response.ok) {
      notFound();
    }

    const user = await response.json() as IUser;

    return user;
  },
};

export default userService;
