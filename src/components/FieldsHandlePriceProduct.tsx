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
        maxPriceProduct: val,
      }));
    } else if (id === "max-price") {
      useProductsStore.setState(() => ({
        ...useProductsStore.state,
        maxPriceProduct: val,
      }));
    }
  };

  return (
    <Box
      my="0.5rem"
      display="flex"
      flexDirection="column"
      gap={1}
      boxShadow={2}
      p={2}
      bgcolor="white"
    >
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
    </Box>
  );
};

export default FieldsHandlePriceProduct;
