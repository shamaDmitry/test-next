import { USER_API_URL } from "@/helpers/consts";
import fetcher from "@/helpers/fetcher";
import useSWR from "swr";

export function useClients() {
  return useSWR(USER_API_URL, fetcher);
}
