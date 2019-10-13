import { stringify } from "query-string";

const fetchApi = async url => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  });
  if (!response.ok) {
    throw response;
  }
  return await response.json();
};
export const fetchGamesList = async url => {
  return fetchApi(url);
};
export const fetchGames = async (url, { date, scale, games }) => {
  return fetchApi(
    `${url}?date=${date}&scale=${scale}&games=${games.join(",")}`
  );
};
