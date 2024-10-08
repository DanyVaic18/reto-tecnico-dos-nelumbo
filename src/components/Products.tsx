import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import Grid from "@mui/material/Grid2";
import { TProducts } from "../types/products";

const Products = () => {
  const [offset, setOffeset] = useState<number>(0);
  const [limit] = useState<number>(10);

  const { data: listProducts } = useQuery<TProducts[]>({
    queryKey: ["getProducts", offset],
    queryFn: () => getProducts(offset, limit),
  });

  useEffect(() => {
    console.log(listProducts);
  }, [listProducts]);

  const currentPage = offset / limit + 1;

  return (
    <Box className="flex flex-col gap-3 my-6">
      <Grid container spacing={3} width={"100%"}>
        <Grid size={4}>
          <Typography>Hola 1</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>Hola 2</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>Hola 3</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>Hola 4</Typography>
        </Grid>
      </Grid>

      <Box className="flex gap-3 my-3">
        <Button
          variant="contained"
          onClick={() => setOffeset(offset - limit)}
          disabled={offset - limit < 0}
        >
          Previus Page
        </Button>
        <Button variant="outlined">{currentPage}</Button>
        <Button variant="contained" onClick={() => setOffeset(offset + limit)}>
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default Products;
