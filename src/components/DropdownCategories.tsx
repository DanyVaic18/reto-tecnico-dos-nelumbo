import { Key, MouseEvent, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Menu, MenuItem } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";

const DropdownCategories = () => {
  const { data } = useQuery({
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
    if (data?.[0].name) {
      setCategorySelected(data?.[0].name);
    }
  }, [data]);

  return (
    <>
      <Button
        variant="outlined"
        className="rounded-none text-gray-500 border-gray-500"
      >
        Categorias:
      </Button>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="rounded-none border-l-0 font-semibold text-gray-500 border-gray-500"
        endIcon={<KeyboardArrowDownIcon />}
      >
        {categorySelected || data?.[0]?.name || ""}
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
        {data?.map((category: { id: Key | null | undefined; name: string }) => {
          if (categorySelected === category.name) return <></>;
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
    </>
  );
};

export default DropdownCategories;
