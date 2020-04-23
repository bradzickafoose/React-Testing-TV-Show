import axios from "axios";

export const fetchShows = () => {

  const url = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"

  return axios
    .get(url)
    .then(response => { return response })
    .catch(error => console.log("Error fetching shows", error));
}

export default fetchShows;