import { MouseEvent, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";
import { ICategory } from "../types/category";

const DropdownCategories = () => {
  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  const [categorySelected, setCategorySelected] =
    useState<string>("Cargando...");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleValue = (value: string) => {
    setCategorySelected(value);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (categories?.[0].name) {
      setCategorySelected(categories?.[0].name);
    }
  }, [categories]);

  return (
    <Box className="grid grid-cols-2">
      <Button
        variant="outlined"
        className="rounded-none text-gray-500 border-gray-500 justify-start lg:text-lg"
      >
        Categorías
      </Button>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="rounded-none border-l-0 font-semibold text-gray-500 border-gray-500 w-full capitalize justify-between truncate lg:text-lg"
        endIcon={<KeyboardArrowDownIcon />}
      >
        {categorySelected || categories?.[0]?.name || ""}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories?.map((category) => {
          if (categorySelected === category.name) return null;
          return (
            <MenuItem
              key={category.id}
              onClick={() => handleValue(category.name)}
            >
              {category.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default DropdownCategories;
