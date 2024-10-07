import { MouseEvent, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Menu, MenuItem } from "@mui/material";

const DropdownCategories = () => {
  const [categorySelected, setCategorySelected] = useState<string>("Todas");
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
        {categorySelected}
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
        <MenuItem onClick={() => handleValue("Perfil")}>Profile</MenuItem>
        <MenuItem onClick={() => handleValue("Cuenta")}>My account</MenuItem>
        <MenuItem onClick={() => handleValue("Cerrar Sesión")}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default DropdownCategories;
