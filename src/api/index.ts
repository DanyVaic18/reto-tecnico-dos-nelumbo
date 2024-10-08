const apiUrl = `${import.meta.env.VITE_API_URL}${
  import.meta.env.VITE_API_VERSION
}`;

export const getCategories = async () => {
  const res = await fetch(`${apiUrl}/categories`);
  return res.json();
};

export const getProducts = async (page: number = 0, limit: number = 10) => {
  const res = await fetch(`${apiUrl}/products?offset=${page}&limit=${limit}`);
  return res.json();
};
