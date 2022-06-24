import axios from "axios";
import { Show } from "../models/show";

export const getShowsApi = async () => {
  const response = await axios.get<{ score: number; show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=stranger"
  );

  return response.data.map((d) => d.show);
};
