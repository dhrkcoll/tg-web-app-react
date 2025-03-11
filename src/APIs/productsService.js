import { BASE_URL } from "../../env.js";

export const fetchProduct = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(`${BASE_URL}/products`, options);

  if (!response.ok) {
    throw new Error(`Server Error! Products havent gotten`);
  }

  const data = await response.json();

  return data;
};

export const fetchProductById = async (endpoint, id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(`${BASE_URL}/${id}`, options);

  if (!response.ok) {
    throw new Error(`Server Error! Products havent gotten`);
  }

  const data = await response.json();

  return data;
};
