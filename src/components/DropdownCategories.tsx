import { MouseEvent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";
import { ICategory } from "../types/category";
import { initAllCategory, useCategoryStore } from "../store/categoryStore";
import { useStore } from "@tanstack/react-store";

const DropdownCategories = () => {
  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  const categorySelected = useStore(
    useCategoryStore,
    (store) => store.categorySelected
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleValue = (value: ICategory) => {
    useCategoryStore.setState(() => ({ categorySelected: value }));
    setAnchorEl(null);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box display="flex" border="1px solid #6b7280">
      <Button
        sx={{
          color: "#6b7280",

          borderRadius: "0",
          width: "30%",
        }}
      >
        Categorías
      </Button>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "#6b7280",
          borderLeft: "1px solid #6b7280",
          borderRadius: "0",
          width: "70%",
          justifyContent:"space-between "
        }}
      >
        {categorySelected.name || categories?.[0]?.name || ""}
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
        {categorySelected.name !== "Todas" && (
          <MenuItem onClick={() => handleValue(initAllCategory)}>
            Todas
          </MenuItem>
        )}

        {categories?.map((category) => {
          if (categorySelected.name === category.name) return null;
          return (
            <MenuItem key={category.id} onClick={() => handleValue(category)}>
              {category.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default DropdownCategories;
