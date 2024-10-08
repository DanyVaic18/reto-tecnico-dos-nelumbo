import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { TProducts } from "../types/products";
import CardProduct from "./CardProduct";
import { useStore } from "@tanstack/react-store";
import { useProductsStore } from "../store/productsStore";
import { useCategoryStore } from "../store/categoryStore";

const Products = () => {
  const searchNameProduct = useStore(
    useProductsStore,
    (store) => store.searchNameProduct || ""
  );
  const categorySelected = useStore(
    useCategoryStore,
    (store) => store.categorySelected
  );

  const minPriceProduct = useStore(
    useProductsStore,
    (store) => store.minPriceProduct || ""
  );

  const maxPriceProduct = useStore(
    useProductsStore,
    (store) => store.maxPriceProduct || ""
  );

  const [offset, setOffeset] = useState<number>(0);
  const [limit] = useState<number>(9);

  const {
    data: listProducts,
    error,
    isLoading,
  } = useQuery<TProducts[]>({
    queryKey: ["getProducts", offset, searchNameProduct, categorySelected.id],
    queryFn: () =>
      getProducts({
        offset,
        limit,
        title: searchNameProduct || "",
        categoryId: categorySelected.id,
        maxPrice: Number(maxPriceProduct),
        minPrice: Number(minPriceProduct),
      }),
  });

  const currentPage = offset / limit + 1;

  const handleProducts = () => {
    return listProducts?.filter((product) =>
      product.title.toLowerCase().includes(searchNameProduct.toLowerCase())
    );
  };

  if (error) {
    return (
      <Box>
        <Typography variant="h3" sx={{ m: "1rem 0rem" }}>
          Ups, Ocurrio un error al obtener los productos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Recargar
        </Button>
      </Box>
    );
  }

  return (
    <Box className="flex flex-col gap-3 my-6">
      <Grid container spacing={2} width={"100%"}>
        {isLoading ? (
          <>
            {Array.from({ length: limit }, (_, ix) => ix).map((val) => (
              <Grid size={{ xs: 1, md: 3, lg: 4 }} key={val}>
                <Skeleton variant="rounded" height={"60vh"} width={"100%"} />
              </Grid>
            ))}
          </>
        ) : handleProducts()?.length === 0 ? (
          <Box>
            <Typography variant="h4">Lista de productos vacía</Typography>
            {searchNameProduct && <Button></Button>}
          </Box>
        ) : (
          handleProducts()?.map((product) => {
            return <CardProduct key={product.id} {...product} />;
          })
        )}
      </Grid>

      <Box display={searchNameProduct ? "none" : "flex"} gap="1rem">
        <Button
          variant="contained"
          onClick={() => setOffeset(offset - limit)}
          disabled={offset - limit < 0 || isLoading}
        >
          Previus Page
        </Button>
        <Button variant="outlined">{currentPage}</Button>
        <Button
          variant="contained"
          onClick={() => setOffeset(offset + limit)}
          disabled={listProducts?.length === 0 || isLoading}
        >
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default Products;
