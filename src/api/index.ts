const apiUrl = `${import.meta.env.VITE_API_URL}${
  import.meta.env.VITE_API_VERSION
}`;

export const getCategories = async () => {
  const res = await fetch(`${apiUrl}/categories`);
  return res.json();
};

interface IGetProducts {
  offset: number;
  limit: number;
  title: string;
  categoryId: number;
  minPrice: number | string;
  maxPrice: number | string;
}

export const getProducts = async ({
  limit,
  offset: page,
  title,
  categoryId,
  maxPrice,
  minPrice,
}: IGetProducts) => {
  const params = new URLSearchParams();

  if (categoryId) {
    params.append("categoryId", categoryId.toString());
  }

  if (maxPrice && minPrice && maxPrice > minPrice) {
    params.append("price_min", minPrice.toString());
    params.append("price_max", maxPrice.toString());
  }

  if (title) {
    params.append("title", title);
  }

  params.append("offset", page.toString());
  params.append("limit", limit.toString());

  const urlProducts = `${apiUrl}/products?${params.toString()}`;
  
  const res = await fetch(urlProducts);
  return res.json();
};
