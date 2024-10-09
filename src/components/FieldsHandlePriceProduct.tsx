import { Box, TextField, Typography } from "@mui/material";
import { useStore } from "@tanstack/react-store";
import { useProductsStore } from "../store/productsStore";
import { ChangeEvent } from "react";

const FieldsHandlePriceProduct = () => {
  const minPriceProduct = useStore(
    useProductsStore,
    (store) => store.minPriceProduct || ""
  );

  const maxPriceProduct = useStore(
    useProductsStore,
    (store) => store.maxPriceProduct || ""
  );

  const handlePriceField = (ev: ChangeEvent<HTMLInputElement>) => {
    const id = ev.target.id;
    const val = Number(ev.target.value.replace(/[^0-9]/g, ""));
    if (id === "min-price") {
      useProductsStore.setState(() => ({
        ...useProductsStore.state,
        minPriceProduct: val,
      }));
    } else if (id === "max-price") {
      useProductsStore.setState(() => ({
        ...useProductsStore.state,
        maxPriceProduct: val,
      }));
    }
  };

  return (
    <>
      <Typography color="primary" fontWeight={700}>
        Precio
      </Typography>
      <Box display="flex" gap={1} justifyContent="space-between">
        <TextField
          id="min-price"
          label="Mínimo"
          variant="outlined"
          size="small"
          value={minPriceProduct}
          onChange={handlePriceField}
          placeholder="0"
        />
        <TextField
          id="max-price"
          label="Maximo"
          variant="outlined"
          size="small"
          value={maxPriceProduct}
          onChange={handlePriceField}
          placeholder="500"
        />
      </Box>
      {maxPriceProduct < minPriceProduct && (
        <Typography
          color="error"
          variant="body2"
          p={0.5}
          borderRadius={1}
          border="1px solid red"
          bgcolor="rgba(250, 10, 10, 0.1)"
        >
          El precio máximo debe ser mayor al precio mínimo.
        </Typography>
      )}
    </>
  );
};

export default FieldsHandlePriceProduct;
