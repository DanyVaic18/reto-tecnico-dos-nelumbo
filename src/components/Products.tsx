import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { TProducts } from "../types/products";
import CardProduct from "./CardProduct";

const Products = () => {
  const [offset, setOffeset] = useState<number>(0);
  const [limit] = useState<number>(9);

  const {
    data: listProducts,
    error,
    isLoading,
  } = useQuery<TProducts[]>({
    queryKey: ["getProducts", offset],
    queryFn: () => getProducts(offset, limit),
  });

  useEffect(() => {
    console.log(listProducts);
  }, [listProducts]);

  const currentPage = offset / limit + 1;

  //   const handlerProducts = () => {

  //   }

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
              <Grid size={4} key={val}>
                <Skeleton variant="rounded" height={"60vh"} width={"100%"} />
              </Grid>
            ))}
          </>
        ) : listProducts?.length === 0 ? (
          <Typography variant="h4">No productos disponibles</Typography>
        ) : (
          listProducts?.map((product) => {
            return <CardProduct key={product.id} {...product} />;
          })
        )}
      </Grid>

      <Box className="flex gap-3 my-3">
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
