import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchProducts = () => {
  const [searchNameProduct, setSearchNameProduct] = useState<string>("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const val = ev.target.value;
    setSearchNameProduct(val);
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
