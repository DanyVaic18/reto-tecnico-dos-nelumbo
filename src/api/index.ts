const apiUrl = `${import.meta.env.VITE_API_URL}${
  import.meta.env.VITE_API_VERSION
}`;

export const getCategories = async () => {
  const res = await fetch(`${apiUrl}/categories`);
  return res.json();
};
