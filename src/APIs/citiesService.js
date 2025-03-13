import { BASE_URL } from "../../env.js";

export const fetchCities = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Server Error! Cities havent gotten`);
  }

  const data = await response.json();

  return data;
};
