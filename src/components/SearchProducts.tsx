import { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useProductsStore } from "../store/productsStore";
import { useStore } from "@tanstack/react-store";

const SearchProducts = () => {
  const searchNameProduct = useStore(
    useProductsStore,
    (store) => store.searchNameProduct
  );

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const val = ev.target.value;
    useProductsStore.setState(() => ({ searchNameProduct: val }));
  };

  return (
    <Box className="">
      <TextField
        fullWidth
        size="small"
        slotProps={{
          input: {
            className: "rounded-full",
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        value={searchNameProduct}
        onChange={handleChange}
        placeholder="Encuentra el producto que necesitas"
      />
    </Box>
  );
};

export default SearchProducts;
